---
title: CNmTransitionNode__CDefinition
---

# Interface CNmTransitionNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmTransitionNode__CDefinition : CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmTransitionNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmPoseNode__CDefinition](/docs/api/schemadefinitions/cnmposenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmPoseNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmTransitionNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendWeightEasing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L36)

```csharp
ref NmEasingOperation_t BlendWeightEasing { get; }
```

#### Property Value

- [NmEasingOperation_t](/docs/api/schemadefinitions/nmeasingoperation_t)

### BoneMaskBlendInTimePercentage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L28)

```csharp
NmPercent_t BoneMaskBlendInTimePercentage { get; }
```

#### Property Value

- [NmPercent_t](/docs/api/schemadefinitions/nmpercent_t)

### Duration

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L26)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DurationOverrideNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L20)

```csharp
ref short DurationOverrideNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RootMotionBlend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L38)

```csharp
ref NmRootMotionBlendMode_t RootMotionBlend { get; }
```

#### Property Value

- [NmRootMotionBlendMode_t](/docs/api/schemadefinitions/nmrootmotionblendmode_t)

### StartBoneMaskNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L24)

```csharp
ref short StartBoneMaskNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TargetStateNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L18)

```csharp
ref short TargetStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TargetSyncIDNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L34)

```csharp
ref short TargetSyncIDNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TimeOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L30)

```csharp
ref float TimeOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TimeOffsetOverrideNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L22)

```csharp
ref short TimeOffsetOverrideNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TransitionOptions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionNode__CDefinition.cs#L32)

```csharp
CNmBitFlags TransitionOptions { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/schemadefinitions/cnmbitflags)

