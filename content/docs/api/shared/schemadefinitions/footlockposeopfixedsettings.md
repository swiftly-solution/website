---
title: FootLockPoseOpFixedSettings
---

```csharp
public interface FootLockPoseOpFixedSettings : ISchemaClass<FootLockPoseOpFixedSettings>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AlwaysUseFallbackHinge** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L29)

```csharp
ref bool AlwaysUseFallbackHinge { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ApplyFootRotationLimits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L31)

```csharp
ref bool ApplyFootRotationLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ApplyHipDrop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L27)

```csharp
ref bool ApplyHipDrop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ApplyLegTwistLimits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L33)

```csharp
ref bool ApplyLegTwistLimits { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ApplyTilt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L25)

```csharp
ref bool ApplyTilt { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EnableLockBreaking** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L41)

```csharp
ref bool EnableLockBreaking { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EnableStretching** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L47)

```csharp
ref bool EnableStretching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ExtensionScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L37)

```csharp
ref float ExtensionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FootInfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L17)

```csharp
ref CUtlVector FootInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **HipBoneIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L21)

```csharp
ref int HipBoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **HipDampingSettings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L19)

```csharp
CAnimInputDamping HipDampingSettings { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### **IkSolverType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L23)

```csharp
ref IKSolverType IkSolverType { get; }
```

#### Property Value

- [IKSolverType](/docs/api/shared/schemadefinitions/iksolvertype)

### **LockBlendTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L45)

```csharp
ref float LockBlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LockBreakTolerance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L43)

```csharp
ref float LockBreakTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxFootHeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L35)

```csharp
ref float MaxFootHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxLegTwist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L39)

```csharp
ref float MaxLegTwist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **MaxStretchAmount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L49)

```csharp
ref float MaxStretchAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StretchExtensionScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FootLockPoseOpFixedSettings.cs#L51)

```csharp
ref float StretchExtensionScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

