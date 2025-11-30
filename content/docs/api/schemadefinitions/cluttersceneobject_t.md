---
title: ClutterSceneObject_t
---

# Interface ClutterSceneObject_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ClutterSceneObject_t : ISchemaClass<ClutterSceneObject_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ClutterSceneObject_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BeginCullSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L36)

```csharp
ref float BeginCullSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Bounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L18)

```csharp
AABB_t Bounds { get; }
```

#### Property Value

- [AABB_t](/docs/api/schemadefinitions/aabb_t)

### EndCullSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L38)

```csharp
ref float EndCullSize { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L20)

```csharp
ref ObjectTypeFlags_t Flags { get; }
```

#### Property Value

- [ObjectTypeFlags_t](/docs/api/schemadefinitions/objecttypeflags_t)

### InstancePositions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L24)

```csharp
ref CUtlVector<Vector> InstancePositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector](/docs/api/natives/vector)>

### InstanceScales

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L26)

```csharp
ref CUtlVector<float> InstanceScales { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### InstanceTintSrgb

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L28)

```csharp
ref CUtlVector<Color> InstanceTintSrgb { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Color](/docs/api/natives/color)>

### Layer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L22)

```csharp
ref short Layer { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### MaterialGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L34)

```csharp
ref CUtlStringToken MaterialGroup { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### RenderableModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L32)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> RenderableModel { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCModel](/docs/api/schemadefinitions/infoforresourcetypecmodel)>

### Tiles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ClutterSceneObject_t.cs#L30)

```csharp
ref CUtlVector<ClutterTile_t> Tiles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ClutterTile_t](/docs/api/schemadefinitions/cluttertile_t)>

