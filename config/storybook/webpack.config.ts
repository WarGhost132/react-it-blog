import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    // Add src directory to resolve.modules
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    // Ensure we only process RuleSetRule, excluding the "..." string if present
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule | '...') => {
        if (typeof rule !== 'string' && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    // Add SVG loader
    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // Add CSS loader
    config.module!.rules.push(buildCssLoader(true));

    // Add DefinePlugin
    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
