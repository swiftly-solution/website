---
title: FootLockPoseOpFixedSettings
---

```csharp
public interface FootLockPoseOpFixedSettings : ISchemaClass<FootLockPoseOpFixedSettings>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AlwaysUseFallbackHinge

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L30)

```csharp
ref bool AlwaysUseFallbackHinge { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyFootRotationLimits

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L32)

```csharp
ref bool ApplyFootRotationLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyHipDrop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L28)

```csharp
ref bool ApplyHipDrop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyLegTwistLimits

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L34)

```csharp
ref bool ApplyLegTwistLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyTilt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L26)

```csharp
ref bool ApplyTilt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableLockBreaking

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L42)

```csharp
ref bool EnableLockBreaking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableStretching

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L48)

```csharp
ref bool EnableStretching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExtensionScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L38)

```csharp
ref float ExtensionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FootInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L18)

```csharp
ref CUtlVector<FootFixedData_t> FootInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FootFixedData_t](/docs/api/shared/schemadefinitions/footfixeddata_t)>

### HipBoneIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L22)

```csharp
ref int HipBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HipDampingSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L20)

```csharp
CAnimInputDamping HipDampingSettings { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### IkSolverType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L24)

```csharp
ref IKSolverType IkSolverType { get; }
```

#### Property Value

- [IKSolverType](/docs/api/shared/schemadefinitions/iksolvertype)

### LockBlendTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L46)

```csharp
ref float LockBlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LockBreakTolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L44)

```csharp
ref float LockBreakTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxFootHeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L36)

```csharp
ref float MaxFootHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxLegTwist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L40)

```csharp
ref float MaxLegTwist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxStretchAmount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L50)

```csharp
ref float MaxStretchAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StretchExtensionScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L52)

```csharp
ref float StretchExtensionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

