---
title: CCollisionProperty
---

```csharp
public interface CCollisionProperty : ISchemaClass<CCollisionProperty>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoundingRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L35)

```csharp
ref float BoundingRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CapsuleCenter1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L45)

```csharp
ref Vector CapsuleCenter1 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CapsuleCenter2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L47)

```csharp
ref Vector CapsuleCenter2 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### CapsuleRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L49)

```csharp
ref float CapsuleRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### CollisionAttribute

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L17)

```csharp
VPhysicsCollisionAttribute_t CollisionAttribute { get; }
```

#### Property Value

- [VPhysicsCollisionAttribute_t](/docs/api/shared/schemadefinitions/vphysicscollisionattribute_t)

### CollisionGroup

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L31)

```csharp
ref byte CollisionGroup { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### EnablePhysics

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L33)

```csharp
ref byte EnablePhysics { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Maxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L21)

```csharp
ref Vector Maxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Mins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L19)

```csharp
ref Vector Mins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SolidFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L23)

```csharp
ref byte SolidFlags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### SolidType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L25)

```csharp
ref SolidType_t SolidType { get; }
```

#### Property Value

- [SolidType_t](/docs/api/shared/schemadefinitions/solidtype_t)

### SpecifiedSurroundingMaxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L39)

```csharp
ref Vector SpecifiedSurroundingMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SpecifiedSurroundingMins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L37)

```csharp
ref Vector SpecifiedSurroundingMins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SurroundType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L29)

```csharp
ref SurroundingBoundsType_t SurroundType { get; }
```

#### Property Value

- [SurroundingBoundsType_t](/docs/api/shared/schemadefinitions/surroundingboundstype_t)

### SurroundingMaxs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L41)

```csharp
ref Vector SurroundingMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SurroundingMins

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L43)

```csharp
ref Vector SurroundingMins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### TriggerBloat

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L27)

```csharp
ref byte TriggerBloat { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### CapsuleCenter1Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L62)

```csharp
void CapsuleCenter1Updated()
```

### CapsuleCenter2Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L63)

```csharp
void CapsuleCenter2Updated()
```

### CapsuleRadiusUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L64)

```csharp
void CapsuleRadiusUpdated()
```

### CollisionAttributeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L51)

```csharp
void CollisionAttributeUpdated()
```

### CollisionGroupUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L58)

```csharp
void CollisionGroupUpdated()
```

### EnablePhysicsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L59)

```csharp
void EnablePhysicsUpdated()
```

### MaxsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L53)

```csharp
void MaxsUpdated()
```

### MinsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L52)

```csharp
void MinsUpdated()
```

### SolidFlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L54)

```csharp
void SolidFlagsUpdated()
```

### SolidTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L55)

```csharp
void SolidTypeUpdated()
```

### SpecifiedSurroundingMaxsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L61)

```csharp
void SpecifiedSurroundingMaxsUpdated()
```

### SpecifiedSurroundingMinsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L60)

```csharp
void SpecifiedSurroundingMinsUpdated()
```

### SurroundTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L57)

```csharp
void SurroundTypeUpdated()
```

### TriggerBloatUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCollisionProperty.cs#L56)

```csharp
void TriggerBloatUpdated()
```

