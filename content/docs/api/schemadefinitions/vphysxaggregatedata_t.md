---
title: VPhysXAggregateData_t
---

# Interface VPhysXAggregateData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VPhysXAggregateData_t : ISchemaClass<VPhysXAggregateData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VPhysXAggregateData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BindPose

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L30)

```csharp
ref CUtlVector<matrix3x4_t> BindPose { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[matrix3x4_t](/docs/api/natives/matrix3x4_t)>

### BoneNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L24)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### BoneParents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L42)

```csharp
ref CUtlVector<ushort> BoneParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### BonesHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L22)

```csharp
ref CUtlVector<uint> BonesHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### CollisionAttributes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L46)

```csharp
ref CUtlVector<VPhysXCollisionAttributes_t> CollisionAttributes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[VPhysXCollisionAttributes_t](/docs/api/schemadefinitions/vphysxcollisionattributes_t)>

### Constraints2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L36)

```csharp
ref CUtlVector<VPhysXConstraint2_t> Constraints2 { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[VPhysXConstraint2_t](/docs/api/schemadefinitions/vphysxconstraint2_t)>

### DebugPartNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L48)

```csharp
ref CUtlVector<CUtlString> DebugPartNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### EmbeddedKeyvalues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L50)

```csharp
string EmbeddedKeyvalues { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FeModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L40)

```csharp
PhysFeModelDesc_t? FeModel { get; }
```

#### Property Value

- [PhysFeModelDesc_t](/docs/api/schemadefinitions/physfemodeldesc_t)?

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L18)

```csharp
ref ushort Flags { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### IndexHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L28)

```csharp
ref CUtlVector<ushort> IndexHash { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### IndexNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L26)

```csharp
ref CUtlVector<ushort> IndexNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### Joints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L38)

```csharp
ref CUtlVector<VPhysXJoint_t> Joints { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[VPhysXJoint_t](/docs/api/schemadefinitions/vphysxjoint_t)>

### Parts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L32)

```csharp
ref CUtlVector<VPhysXBodyPart_t> Parts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[VPhysXBodyPart_t](/docs/api/schemadefinitions/vphysxbodypart_t)>

### RefCounter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L20)

```csharp
ref ushort RefCounter { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ShapeMarkups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L34)

```csharp
ref CUtlVector<PhysShapeMarkup_t> ShapeMarkups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PhysShapeMarkup_t](/docs/api/schemadefinitions/physshapemarkup_t)>

### SurfacePropertyHashes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L44)

```csharp
ref CUtlVector<uint> SurfacePropertyHashes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

