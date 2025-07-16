export type DocsLinkType = {
    title: string;
    href: string;
    strict?: boolean;
    children?: DocsLinkType[];
};
