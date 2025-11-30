---
title: CMotionMatchingUpdateNode
---

# Interface CMotionMatchingUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMotionMatchingUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CMotionMatchingUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CLeafUpdateNode](/docs/api/schemadefinitions/cleafupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLeafUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMotionMatchingUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendCurve

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L32)

```csharp
CBlendCurve BlendCurve { get; }
```

#### Property Value

- [CBlendCurve](/docs/api/schemadefinitions/cblendcurve)

### BlendTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L36)

```csharp
ref float BlendTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DataSet

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L18)

```csharp
CMotionDataSet DataSet { get; }
```

#### Property Value

- [CMotionDataSet](/docs/api/schemadefinitions/cmotiondataset)

### DistanceScale_Damping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L52)

```csharp
CAnimInputDamping DistanceScale_Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/schemadefinitions/caniminputdamping)

### DistanceScale_InnerRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L56)

```csharp
ref float DistanceScale_InnerRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceScale_MaxScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L58)

```csharp
ref float DistanceScale_MaxScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceScale_MinScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L60)

```csharp
ref float DistanceScale_MinScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DistanceScale_OuterRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L54)

```csharp
ref float DistanceScale_OuterRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EnableDistanceScaling

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L62)

```csharp
ref bool EnableDistanceScaling { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableRotationCorrection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L44)

```csharp
ref bool EnableRotationCorrection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GoalAssist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L46)

```csharp
ref bool GoalAssist { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GoalAssistDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L48)

```csharp
ref float GoalAssistDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GoalAssistTolerance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L50)

```csharp
ref float GoalAssistTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LockClipWhenWaning

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L38)

```csharp
ref bool LockClipWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Metrics

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L20)

```csharp
ref CUtlVector<SchemaUntypedField> Metrics { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### ReselectionTimeWindow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L42)

```csharp
ref float ReselectionTimeWindow { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SampleRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L34)

```csharp
ref float SampleRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SearchEveryTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L24)

```csharp
ref bool SearchEveryTick { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SearchInterval

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L26)

```csharp
ref float SearchInterval { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SearchWhenClipEnds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L28)

```csharp
ref bool SearchWhenClipEnds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SearchWhenGoalChanges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L30)

```csharp
ref bool SearchWhenGoalChanges { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SelectionThreshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L40)

```csharp
ref float SelectionThreshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Weights

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L22)

```csharp
ref CUtlVector<float> Weights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

