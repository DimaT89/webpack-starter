import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {IBuildOptions} from './types/types';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // Если раздавать статику через nginx То надо делать проксирование на Index.html
    historyApiFallback: true,
    hot: true,
  }
}