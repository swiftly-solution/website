---
title: CGameTrace
---

```csharp
public struct CGameTrace
```

#### Inherited Members

## Fields

### Body

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L34)

```csharp
public void* Body
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

### BodyTransform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L38)

```csharp
public CTransform BodyTransform
```

#### Field Value

- [CTransform](/docs/api/shared/natives/ctransform)

### Contents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L37)

```csharp
public ulong Contents
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### EndPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L42)

```csharp
public Vector EndPos
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### ExactHitPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L55)

```csharp
public bool ExactHitPoint
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Fraction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L47)

```csharp
public float Fraction
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitBox

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L32)

```csharp
public CHitBoxTrace* HitBox
```

#### Field Value

- [CHitBoxTrace](/docs/api/shared/natives/chitboxtrace)*

### HitNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L43)

```csharp
public Vector HitNormal
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### HitOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L46)

```csharp
public float HitOffset
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitPoint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L44)

```csharp
public Vector HitPoint
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### HitboxBoneIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L50)

```csharp
public short HitboxBoneIndex
```

#### Field Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RayType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L52)

```csharp
public RayType_t RayType
```

#### Field Value

- [RayType_t](/docs/api/shared/natives/raytype_t)

### Shape

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L35)

```csharp
public void* Shape
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

### ShapeAttributes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L39)

```csharp
public RnCollisionAttr_t ShapeAttributes
```

#### Field Value

- [RnCollisionAttr_t](/docs/api/shared/natives/rncollisionattr_t)

### StartInSolid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L54)

```csharp
public bool StartInSolid
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L41)

```csharp
public Vector StartPos
```

#### Field Value

- [Vector](/docs/api/shared/natives/vector)

### SurfaceProperties

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L30)

```csharp
public CPhysSurfacePropertiesTrace* SurfaceProperties
```

#### Field Value

- [CPhysSurfacePropertiesTrace](/docs/api/shared/natives/cphyssurfacepropertiestrace)*

### Triangle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L49)

```csharp
public int Triangle
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L31)

```csharp
public void* pEntity
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

## Properties

### DidHit

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L59)

```csharp
public readonly bool DidHit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Direction

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L61)

```csharp
public readonly Vector Direction { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L60)

```csharp
public readonly float Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L57)

```csharp
public readonly CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)

## Methods

### HitEntity(out T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L123)

```csharp
public readonly bool HitEntity<T>(out T entity) where T : ISchemaClass<T>
```

#### Parameters

- **entity**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitEntityByDesignerName(string, out T, NameMatchType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L69)

```csharp
public readonly bool HitEntityByDesignerName<T>(string designerName, out T outEntity, NameMatchType matchType = NameMatchType.StartsWith) where T : ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **outEntity**: T
- **matchType**: [NameMatchType](/docs/api/shared/natives/namematchtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitEntityByDesignerName(string, NameMatchType)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L99)

```csharp
public readonly bool HitEntityByDesignerName<T>(string designerName, NameMatchType matchType = NameMatchType.StartsWith) where T : ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **matchType**: [NameMatchType](/docs/api/shared/natives/namematchtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitPlayer(out IPlayer?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L104)

```csharp
public readonly bool HitPlayer(out IPlayer? player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/shared/players/iplayer)?

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

