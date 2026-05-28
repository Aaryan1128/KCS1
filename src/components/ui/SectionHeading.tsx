export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 dark:text-navy-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-navy-600 dark:text-navy-200">
          {description}
        </p>
      ) : null}
    </div>
  );
}

