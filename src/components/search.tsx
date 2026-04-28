'use client';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { Client } from 'typesense';
import { useTypesenseSearch } from 'typesense-fumadocs-adapter/client';

const client = new Client({
  nodes: [{ url: process.env.NEXT_PUBLIC_TYPESENSE_HOST! }],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCHONLY_KEY!,
});

export default function TypesenseSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // optional
  const { search, setSearch, query } = useTypesenseSearch({
    typesenseCollectionName: `swiftlys2`,
    locale,
    legacy: false, // optional, set to true for fumadocs-ui version < 16.6.0
    client,
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
        <SearchDialogFooter />
      </SearchDialogContent>
    </SearchDialog>
  );
}