import { AbsoluteHeader } from "@root/absolute-header/AbsoluteHeader";
import { Container } from "@root/container/Container";
import React from "react";
import { BaseHeroProps } from "./Hero";
import cn from "classnames";

export type HeroSplitProps = BaseHeroProps & {
  previewComponent?: React.ReactNode;
};

export const HeroSplit: React.FC<HeroSplitProps> = (props) => {
  return (
    <div className={"bg-white dark:bg-slate-800 relative"}>
      {props.withHeader && <AbsoluteHeader items={props.navigationItems} />}
      <div className="relative isolate px-6 pt-14 lg:px-8 z-20">
        {!props.backgroundImage && (
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        )}
        <div className="grid grid-cols-2 gap-20">
          <Container fluid>
            {props.heroNotifier && (
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                {props.heroNotifier}
              </div>
            )}
            {(props.heroTitle || props.heroSubtitle || props.actions) && (
              <div className={"text-left"}>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                  {props.heroTitle}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                  {props.heroSubtitle}
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  {props.actions}
                </div>
              </div>
            )}
          </Container>
          <Container fluid relative plain flexCenter>
            {props.previewComponent}
          </Container>
        </div>
        {!props.backgroundImage && (
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        )}
      </div>
      {props.backgroundImage && (
        <>
          <div
            className={cn([
              "absolute inset-0 w-full h-full z-10",
              props.backgroundFilterClassName,
            ])}
          />
          <img
            src={props.backgroundImage}
            className={cn([
              "absolute inset-0 w-full h-full object-cover",
              props.backgroundImageClassName,
            ])}
          />
        </>
      )}
    </div>
  );
};
