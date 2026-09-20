import Entry from "../entry/Entry";
import styles from "./EntryList.module.css";

/**
 * The vertical run of entries that replaced the card deck.
 *
 * An <ol> rather than a <div>, because the order IS the content: both data
 * files are maintained newest-first (experience runs Siemens -> Northeastern
 * COE), and nothing else in the codebase says so -- there are no date fields
 * to sort on. The list semantics are the only machine-readable record that
 * reordering the array changes meaning rather than just layout.
 *
 * Stateless on purpose. CardDeck owned `active`/`isOpen`/`openerRef` and an
 * exit timer solely to drive the modal; with every entry rendered inline there
 * is nothing left to coordinate.
 */
export default function EntryList({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Entry item={item} />
        </li>
      ))}
    </ol>
  );
}
