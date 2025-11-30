---
title: VPhysXJoint_t
---

# Interface VPhysXJoint_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VPhysXJoint_t : ISchemaClass<VPhysXJoint_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VPhysXJoint_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AngularDampingRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L66)

```csharp
ref float AngularDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngularFrequency

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L64)

```csharp
ref float AngularFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AngularTargetVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L56)

```csharp
ref Vector AngularTargetVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Body1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L20)

```csharp
ref ushort Body1 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Body2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L22)

```csharp
ref ushort Body2 { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### ElasticDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L72)

```csharp
ref float ElasticDamping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Elasticity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L70)

```csharp
ref float Elasticity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnableAngularMotor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L54)

```csharp
ref bool EnableAngularMotor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableCollision

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L30)

```csharp
ref bool EnableCollision { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLinearLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L36)

```csharp
ref bool EnableLinearLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLinearMotor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L40)

```csharp
ref bool EnableLinearMotor { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableSwingLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L46)

```csharp
ref bool EnableSwingLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableTwistLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L50)

```csharp
ref bool EnableTwistLimit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L24)

```csharp
ref ushort Flags { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### Frame1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L26)

```csharp
ref CTransform Frame1 { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### Frame2

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L28)

```csharp
ref CTransform Frame2 { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### Friction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L68)

```csharp
ref float Friction { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsAngularConstraintDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L34)

```csharp
ref bool IsAngularConstraintDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLinearConstraintDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L32)

```csharp
ref bool IsLinearConstraintDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinearDampingRatio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L62)

```csharp
ref float LinearDampingRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearFrequency

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L60)

```csharp
ref float LinearFrequency { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LinearLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L38)

```csharp
VPhysXRange_t LinearLimit { get; }
```

#### Property Value

- [VPhysXRange_t](/docs/api/schemadefinitions/vphysxrange_t)

### LinearTargetVelocity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L42)

```csharp
ref Vector LinearTargetVelocity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MaxForce

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L44)

```csharp
ref float MaxForce { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxTorque

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L58)

```csharp
ref float MaxTorque { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Plasticity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L74)

```csharp
ref float Plasticity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SwingLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L48)

```csharp
VPhysXRange_t SwingLimit { get; }
```

#### Property Value

- [VPhysXRange_t](/docs/api/schemadefinitions/vphysxrange_t)

### Tag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L76)

```csharp
string Tag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TwistLimit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L52)

```csharp
VPhysXRange_t TwistLimit { get; }
```

#### Property Value

- [VPhysXRange_t](/docs/api/schemadefinitions/vphysxrange_t)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXJoint_t.cs#L18)

```csharp
ref ushort Type { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

