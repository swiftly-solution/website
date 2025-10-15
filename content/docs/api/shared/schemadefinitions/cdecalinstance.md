---
title: CDecalInstance
---

```csharp
public interface CDecalInstance : ISchemaClass<CDecalInstance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimationScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L45)

```csharp
ref float AnimationScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BoneIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L25)

```csharp
ref int BoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BoundingRadiusSqr

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L55)

```csharp
ref float BoundingRadiusSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Color

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L37)

```csharp
ref Color Color { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### DecalGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L17)

```csharp
ref CGlobalSymbol DecalGroup { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### Depth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L43)

```csharp
ref float Depth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DoDecalLightmapping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L61)

```csharp
ref bool DoDecalLightmapping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L23)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### FadeDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L51)

```csharp
ref float FadeDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeStartTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L49)

```csharp
ref float FadeStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L35)

```csharp
ref DecalFlags_t Flags { get; }
```

#### Property Value

- [DecalFlags_t](/docs/api/shared/schemadefinitions/decalflags_t)

### Height

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L41)

```csharp
ref float Height { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsAdjacent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L59)

```csharp
ref bool IsAdjacent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LightingOriginOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L53)

```csharp
ref float LightingOriginOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Material

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L19)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### NormalLS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L31)

```csharp
ref Vector NormalLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PlaceTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L47)

```csharp
GameTime_t PlaceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### PositionLS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L29)

```csharp
ref Vector PositionLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SAxisLS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L33)

```csharp
ref Vector SAxisLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SequenceIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L57)

```csharp
ref short SequenceIndex { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### SequenceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L21)

```csharp
ref CUtlStringToken SequenceName { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### SkinnedModelMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L63)

```csharp
ref DecalMode_t SkinnedModelMode { get; }
```

#### Property Value

- [DecalMode_t](/docs/api/shared/schemadefinitions/decalmode_t)

### TriangleIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L27)

```csharp
ref int TriangleIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Width

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L39)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

