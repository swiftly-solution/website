---
title: BlendItem_t
---

# Interface BlendItem_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface BlendItem_t : ISchemaClass<BlendItem_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<BlendItem_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Child

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L20)

```csharp
CAnimUpdateNodeRef Child { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/schemadefinitions/canimupdatenoderef)

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L26)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Pos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L24)

```csharp
ref Vector2D Pos { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L22)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L18)

```csharp
ref CUtlVector<TagSpan_t> Tags { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[TagSpan_t](/docs/api/schemadefinitions/tagspan_t)>

### UseCustomDuration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BlendItem_t.cs#L28)

```csharp
ref bool UseCustomDuration { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

