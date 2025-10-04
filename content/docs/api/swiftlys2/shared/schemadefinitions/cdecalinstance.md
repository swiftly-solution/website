---
title: CDecalInstance
---

```csharp
public interface CDecalInstance : ISchemaClass<CDecalInstance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnimationScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L42)

```csharp
ref float AnimationScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**BoneIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L24)

```csharp
ref int BoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**BoundingRadiusSqr** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L52)

```csharp
ref float BoundingRadiusSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Color** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L34)

```csharp
ref Color Color { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

**DecalGroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L16)

```csharp
ref CGlobalSymbol DecalGroup { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

**Depth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L40)

```csharp
ref float Depth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DoDecalLightmapping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L58)

```csharp
ref bool DoDecalLightmapping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Entity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L22)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**FadeDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L48)

```csharp
ref float FadeDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**FadeStartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L46)

```csharp
ref float FadeStartTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L32)

```csharp
ref DecalFlags_t Flags { get; }
```

#### Property Value

- [DecalFlags_t](/docs/api/shared/schemadefinitions/decalflags_t)

**Height** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L38)

```csharp
ref float Height { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**IsAdjacent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L56)

```csharp
ref bool IsAdjacent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LightingOriginOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L50)

```csharp
ref float LightingOriginOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Material** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

**Next** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L60)

```csharp
CDecalInstance? Next { get; }
```

#### Property Value

- [CDecalInstance](/docs/api/shared/schemadefinitions/cdecalinstance)?

**NormalLS** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L28)

```csharp
ref Vector NormalLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**PlaceTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L44)

```csharp
GameTime_t PlaceTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**PositionLS** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L26)

```csharp
ref Vector PositionLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Prev** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L62)

```csharp
CDecalInstance? Prev { get; }
```

#### Property Value

- [CDecalInstance](/docs/api/shared/schemadefinitions/cdecalinstance)?

**SAxisLS** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L30)

```csharp
ref Vector SAxisLS { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**SequenceIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L54)

```csharp
ref short SequenceIndex { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**SequenceName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L20)

```csharp
ref CUtlStringToken SequenceName { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

**Width** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDecalInstance.cs#L36)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

