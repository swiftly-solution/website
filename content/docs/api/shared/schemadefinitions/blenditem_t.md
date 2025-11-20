---
title: BlendItem_t
---

```csharp
public interface BlendItem_t : ISchemaClass<BlendItem_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Child

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L20)

```csharp
CAnimUpdateNodeRef Child { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L26)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Pos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L24)

```csharp
ref Vector2D Pos { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L22)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L18)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[TagSpan_t](/docs/api/shared/schemadefinitions/tagspan_t)>

### UseCustomDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L28)

```csharp
ref bool UseCustomDuration { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

