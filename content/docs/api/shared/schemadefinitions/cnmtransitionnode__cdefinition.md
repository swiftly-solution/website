---
title: CNmTransitionNode__CDefinition
---

```csharp
public interface CNmTransitionNode__CDefinition : CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmTransitionNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendWeightEasing

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L35)

```csharp
ref NmEasingOperation_t BlendWeightEasing { get; }
```

#### Property Value

- [NmEasingOperation_t](/docs/api/shared/schemadefinitions/nmeasingoperation_t)

### BoneMaskBlendInTimePercentage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L27)

```csharp
NmPercent_t BoneMaskBlendInTimePercentage { get; }
```

#### Property Value

- [NmPercent_t](/docs/api/shared/schemadefinitions/nmpercent_t)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L25)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DurationOverrideNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L19)

```csharp
ref short DurationOverrideNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RootMotionBlend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L37)

```csharp
ref NmRootMotionBlendMode_t RootMotionBlend { get; }
```

#### Property Value

- [NmRootMotionBlendMode_t](/docs/api/shared/schemadefinitions/nmrootmotionblendmode_t)

### StartBoneMaskNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L23)

```csharp
ref short StartBoneMaskNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TargetStateNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L17)

```csharp
ref short TargetStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TargetSyncIDNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L33)

```csharp
ref short TargetSyncIDNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TimeOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L29)

```csharp
ref float TimeOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeOffsetOverrideNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L21)

```csharp
ref short TimeOffsetOverrideNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TransitionOptions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L31)

```csharp
CNmBitFlags TransitionOptions { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/shared/schemadefinitions/cnmbitflags)

