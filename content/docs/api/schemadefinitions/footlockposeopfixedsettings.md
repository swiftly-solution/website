---
title: FootLockPoseOpFixedSettings
---

# Interface FootLockPoseOpFixedSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FootLockPoseOpFixedSettings : ISchemaClass<FootLockPoseOpFixedSettings>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FootLockPoseOpFixedSettings>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AlwaysUseFallbackHinge

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L30)

```csharp
ref bool AlwaysUseFallbackHinge { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyFootRotationLimits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L32)

```csharp
ref bool ApplyFootRotationLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyHipDrop

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L28)

```csharp
ref bool ApplyHipDrop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyLegTwistLimits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L34)

```csharp
ref bool ApplyLegTwistLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyTilt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L26)

```csharp
ref bool ApplyTilt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLockBreaking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L42)

```csharp
ref bool EnableLockBreaking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableStretching

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L48)

```csharp
ref bool EnableStretching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExtensionScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L38)

```csharp
ref float ExtensionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FootInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L18)

```csharp
ref CUtlVector<FootFixedData_t> FootInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FootFixedData_t](/docs/api/schemadefinitions/footfixeddata_t)>

### HipBoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L22)

```csharp
ref int HipBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HipDampingSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L20)

```csharp
CAnimInputDamping HipDampingSettings { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/schemadefinitions/caniminputdamping)

### IkSolverType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L24)

```csharp
ref IKSolverType IkSolverType { get; }
```

#### Property Value

- [IKSolverType](/docs/api/schemadefinitions/iksolvertype)

### LockBlendTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L46)

```csharp
ref float LockBlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LockBreakTolerance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L44)

```csharp
ref float LockBreakTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxFootHeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L36)

```csharp
ref float MaxFootHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxLegTwist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L40)

```csharp
ref float MaxLegTwist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxStretchAmount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L50)

```csharp
ref float MaxStretchAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StretchExtensionScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L52)

```csharp
ref float StretchExtensionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

