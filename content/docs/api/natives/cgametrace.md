---
title: CGameTrace
---

# Struct CGameTrace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L27)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CGameTrace
```

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### Body

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L34)

```csharp
public void* Body
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

### BodyTransform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L38)

```csharp
public CTransform BodyTransform
```

#### Field Value

- [CTransform](/docs/api/natives/ctransform)

### Contents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L37)

```csharp
public ulong Contents
```

#### Field Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### EndPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L42)

```csharp
public Vector EndPos
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### ExactHitPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L55)

```csharp
public bool ExactHitPoint
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Fraction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L47)

```csharp
public float Fraction
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitBox

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L32)

```csharp
public CHitBoxTrace* HitBox
```

#### Field Value

- [CHitBoxTrace](/docs/api/natives/chitboxtrace)*

### HitNormal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L43)

```csharp
public Vector HitNormal
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### HitOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L46)

```csharp
public float HitOffset
```

#### Field Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HitPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L44)

```csharp
public Vector HitPoint
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### HitboxBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L50)

```csharp
public short HitboxBoneIndex
```

#### Field Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RayType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L52)

```csharp
public RayType_t RayType
```

#### Field Value

- [RayType_t](/docs/api/natives/raytype_t)

### Shape

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L35)

```csharp
public void* Shape
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

### ShapeAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L39)

```csharp
public RnCollisionAttr_t ShapeAttributes
```

#### Field Value

- [RnCollisionAttr_t](/docs/api/natives/rncollisionattr_t)

### StartInSolid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L54)

```csharp
public bool StartInSolid
```

#### Field Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L41)

```csharp
public Vector StartPos
```

#### Field Value

- [Vector](/docs/api/natives/vector)

### SurfaceProperties

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L30)

```csharp
public CPhysSurfacePropertiesTrace* SurfaceProperties
```

#### Field Value

- [CPhysSurfacePropertiesTrace](/docs/api/natives/cphyssurfacepropertiestrace)*

### Triangle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L49)

```csharp
public int Triangle
```

#### Field Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### pEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L31)

```csharp
public void* pEntity
```

#### Field Value

- [void](https://learn.microsoft.com/dotnet/api/system.void)*

## Properties

### DidHit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L59)

```csharp
public readonly bool DidHit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Direction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L61)

```csharp
public readonly Vector Direction { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Distance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L60)

```csharp
public readonly float Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L57)

```csharp
public readonly CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

## Methods

### HitEntity(out T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L145)

```csharp
public readonly bool HitEntity<T>(out T entity) where T : ISchemaClass<T>
```

#### Parameters

- **entity**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitEntity()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L151)

```csharp
public readonly bool HitEntity<T>() where T : ISchemaClass<T>
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitEntityByDesignerName(string, out T, NameMatchType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L69)

```csharp
public readonly bool HitEntityByDesignerName<T>(string designerName, out T outEntity, NameMatchType matchType = NameMatchType.StartsWith) where T : ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **outEntity**: T
- **matchType**: [NameMatchType](/docs/api/natives/namematchtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitEntityByDesignerName(string, NameMatchType)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L105)

```csharp
public readonly bool HitEntityByDesignerName<T>(string designerName, NameMatchType matchType = NameMatchType.StartsWith) where T : ISchemaClass<T>
```

#### Parameters

- **designerName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **matchType**: [NameMatchType](/docs/api/natives/namematchtype)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

- **T**: 

### HitPlayer(out IPlayer?)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L110)

```csharp
public readonly bool HitPlayer(out IPlayer? player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer)?

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HitPlayer()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CGameTrace.cs#L140)

```csharp
public readonly bool HitPlayer()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

