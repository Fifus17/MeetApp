import { JSX, createContext, createSignal, onCleanup } from 'solid-js';
import { Color } from '~/utils/ColorsUtils';

export const ConfigContext = createContext<{ currentColor: () => Color, setCurrentColor: (color: Color) => void } | undefined>();

export function ConfigProvider(props: { children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  const [currentColor, setCurrentColor] = createSignal(Color["rp-green"]);

  // Clean up when the component unmounts
  onCleanup(() => {
    // Perform any cleanup actions, if necessary
  });

  return (
    <ConfigContext.Provider value={{ currentColor, setCurrentColor }}>
      {props.children}
    </ConfigContext.Provider>
  );
}
