---
title: CFootLockUpdateNode
---

```csharp
public interface CFootLockUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootLockUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ApplyFootRotationLimits

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L46)

```csharp
ref bool ApplyFootRotationLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyHipShift

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L48)

```csharp
ref bool ApplyHipShift { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BlendTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L36)

```csharp
ref float BlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnableRootHeightDamping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L56)

```csharp
ref bool EnableRootHeightDamping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableVerticalCurvedPaths

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L54)

```csharp
ref bool EnableVerticalCurvedPaths { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FootSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L20)

```csharp
ref CUtlVector<FootFixedSettings> FootSettings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FootFixedSettings](/docs/api/shared/schemadefinitions/footfixedsettings)>

### HipShiftDamping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L22)

```csharp
CAnimInputDamping HipShiftDamping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### HipShiftScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L34)

```csharp
ref float HipShiftScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxRootHeightOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L38)

```csharp
ref float MaxRootHeightOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinRootHeightOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L40)

```csharp
ref float MinRootHeightOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ModulateStepHeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L50)

```csharp
ref bool ModulateStepHeight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpFixedSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L18)

```csharp
FootLockPoseOpFixedSettings OpFixedSettings { get; }
```

#### Property Value

- [FootLockPoseOpFixedSettings](/docs/api/shared/schemadefinitions/footlockposeopfixedsettings)

### ResetChild

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L52)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RootHeightDamping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L24)

```csharp
CAnimInputDamping RootHeightDamping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### StepHeightDecreaseScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L32)

```csharp
ref float StepHeightDecreaseScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StepHeightIncreaseScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L30)

```csharp
ref float StepHeightIncreaseScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StrideCurveLimitScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L28)

```csharp
ref float StrideCurveLimitScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StrideCurveScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L26)

```csharp
ref float StrideCurveScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TiltPlanePitchSpringStrength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L42)

```csharp
ref float TiltPlanePitchSpringStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TiltPlaneRollSpringStrength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootLockUpdateNode.cs#L44)

```csharp
ref float TiltPlaneRollSpringStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

