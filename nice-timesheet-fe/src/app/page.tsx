'use client';
import {Button} from "@/shared/components/ui/button";
import {useTheme} from "next-themes";

export default function Home() {

    const {setTheme, theme} = useTheme()

    return (<>
          <h1 className="font-bold underline">
              Hello world!
          </h1>
          <Button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
                Click me!
          </Button>
      </>
  );
}
