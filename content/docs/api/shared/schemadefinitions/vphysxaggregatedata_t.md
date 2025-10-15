---
title: VPhysXAggregateData_t
---

```csharp
public interface VPhysXAggregateData_t : ISchemaClass<VPhysXAggregateData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BindPose

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L29)

```csharp
ref CUtlVector<matrix3x4_t> BindPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)>

### BoneNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L23)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### BoneParents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L41)

```csharp
ref CUtlVector<ushort> BoneParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### BonesHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L21)

```csharp
ref CUtlVector<uint> BonesHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CollisionAttributes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L45)

```csharp
ref CUtlVector<VPhysXCollisionAttributes_t> CollisionAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[VPhysXCollisionAttributes_t](/docs/api/shared/schemadefinitions/vphysxcollisionattributes_t)>

### Constraints2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L35)

```csharp
ref CUtlVector<VPhysXConstraint2_t> Constraints2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[VPhysXConstraint2_t](/docs/api/shared/schemadefinitions/vphysxconstraint2_t)>

### DebugPartNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L47)

```csharp
ref CUtlVector<CUtlString> DebugPartNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### EmbeddedKeyvalues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L49)

```csharp
string EmbeddedKeyvalues { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FeModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L39)

```csharp
PhysFeModelDesc_t? FeModel { get; }
```

#### Property Value

- [PhysFeModelDesc_t](/docs/api/shared/schemadefinitions/physfemodeldesc_t)?

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L17)

```csharp
ref ushort Flags { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### IndexHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L27)

```csharp
ref CUtlVector<ushort> IndexHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### IndexNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L25)

```csharp
ref CUtlVector<ushort> IndexNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### Joints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L37)

```csharp
ref CUtlVector<VPhysXJoint_t> Joints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[VPhysXJoint_t](/docs/api/shared/schemadefinitions/vphysxjoint_t)>

### Parts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L31)

```csharp
ref CUtlVector<VPhysXBodyPart_t> Parts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[VPhysXBodyPart_t](/docs/api/shared/schemadefinitions/vphysxbodypart_t)>

### RefCounter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L19)

```csharp
ref ushort RefCounter { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ShapeMarkups

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L33)

```csharp
ref CUtlVector<PhysShapeMarkup_t> ShapeMarkups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PhysShapeMarkup_t](/docs/api/shared/schemadefinitions/physshapemarkup_t)>

### SurfacePropertyHashes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L43)

```csharp
ref CUtlVector<uint> SurfacePropertyHashes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

