import { NavItem } from "@root/absolute-header/AbsoluteHeader";
import React from "react";
import { HeroSimple, HeroSimpleProps } from "./HeroSimple";
import { HeroSplit, HeroSplitProps } from "./HeroSplit";

export type HeroProps = BaseHeroProps & HeroSimpleProps & HeroSplitProps;

export interface BaseHeroProps {
  navigationItems?: NavItem[];
  heroTitle?: React.ReactNode;
  heroSubtitle?: React.ReactNode;
  heroNotifier?: React.ReactNode;
  actions?: React.ReactNode;
  withHeader?: boolean;
  variant?: "simple" | "split";
  backgroundImage?: string;
  backgroundImageClassName?: string;
  backgroundFilterClassName?: string;
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { variant = "simple", ...rest } = props;
  return component[variant](rest);
};

const component = {
  simple: HeroSimple,
  split: HeroSplit,
};
