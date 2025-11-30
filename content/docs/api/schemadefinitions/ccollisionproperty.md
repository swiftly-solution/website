---
title: CCollisionProperty
---

# Interface CCollisionProperty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCollisionProperty : ISchemaClass<CCollisionProperty>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CCollisionProperty>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoundingRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L36)

```csharp
ref float BoundingRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CapsuleCenter1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L46)

```csharp
ref Vector CapsuleCenter1 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### CapsuleCenter2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L48)

```csharp
ref Vector CapsuleCenter2 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### CapsuleRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L50)

```csharp
ref float CapsuleRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CollisionAttribute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L18)

```csharp
VPhysicsCollisionAttribute_t CollisionAttribute { get; }
```

#### Property Value

- [VPhysicsCollisionAttribute_t](/docs/api/schemadefinitions/vphysicscollisionattribute_t)

### CollisionGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L32)

```csharp
ref byte CollisionGroup { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnablePhysics

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L34)

```csharp
ref byte EnablePhysics { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Maxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L22)

```csharp
ref Vector Maxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Mins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L20)

```csharp
ref Vector Mins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SolidFlags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L24)

```csharp
ref byte SolidFlags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### SolidType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L26)

```csharp
ref SolidType_t SolidType { get; }
```

#### Property Value

- [SolidType_t](/docs/api/schemadefinitions/solidtype_t)

### SpecifiedSurroundingMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L40)

```csharp
ref Vector SpecifiedSurroundingMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SpecifiedSurroundingMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L38)

```csharp
ref Vector SpecifiedSurroundingMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SurroundType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L30)

```csharp
ref SurroundingBoundsType_t SurroundType { get; }
```

#### Property Value

- [SurroundingBoundsType_t](/docs/api/schemadefinitions/surroundingboundstype_t)

### SurroundingMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L42)

```csharp
ref Vector SurroundingMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### SurroundingMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L44)

```csharp
ref Vector SurroundingMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TriggerBloat

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L28)

```csharp
ref byte TriggerBloat { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### CapsuleCenter1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L63)

```csharp
void CapsuleCenter1Updated()
```

### CapsuleCenter2Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L64)

```csharp
void CapsuleCenter2Updated()
```

### CapsuleRadiusUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L65)

```csharp
void CapsuleRadiusUpdated()
```

### CollisionAttributeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L52)

```csharp
void CollisionAttributeUpdated()
```

### CollisionGroupUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L59)

```csharp
void CollisionGroupUpdated()
```

### EnablePhysicsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L60)

```csharp
void EnablePhysicsUpdated()
```

### MaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L54)

```csharp
void MaxsUpdated()
```

### MinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L53)

```csharp
void MinsUpdated()
```

### SolidFlagsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L55)

```csharp
void SolidFlagsUpdated()
```

### SolidTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L56)

```csharp
void SolidTypeUpdated()
```

### SpecifiedSurroundingMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L62)

```csharp
void SpecifiedSurroundingMaxsUpdated()
```

### SpecifiedSurroundingMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L61)

```csharp
void SpecifiedSurroundingMinsUpdated()
```

### SurroundTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L58)

```csharp
void SurroundTypeUpdated()
```

### TriggerBloatUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L57)

```csharp
void TriggerBloatUpdated()
```

