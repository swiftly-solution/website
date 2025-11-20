---
title: CSequenceTagSpans
---

```csharp
public interface CSequenceTagSpans : ISchemaClass<CSequenceTagSpans>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### SequenceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceTagSpans.cs#L18)

```csharp
ref CGlobalSymbol SequenceName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceTagSpans.cs#L20)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[TagSpan_t](/docs/api/shared/schemadefinitions/tagspan_t)>

