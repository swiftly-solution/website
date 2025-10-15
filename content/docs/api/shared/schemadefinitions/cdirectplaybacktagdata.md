---
title: CDirectPlaybackTagData
---

```csharp
public interface CDirectPlaybackTagData : ISchemaClass<CDirectPlaybackTagData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### SequenceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackTagData.cs#L17)

```csharp
string SequenceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDirectPlaybackTagData.cs#L19)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[TagSpan_t](/docs/api/shared/schemadefinitions/tagspan_t)>

