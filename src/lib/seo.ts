import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Triángulo - Consultoría Organizacional';
	const description = "¡Bienvenido a Triángulo Consultores 👋 Hunting, R&S y Consultoría";

	return {
		title,
		description,
		canonical: `https://nuro.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Triángulo Consultores',
			url: `https://nuro.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://nuro.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
