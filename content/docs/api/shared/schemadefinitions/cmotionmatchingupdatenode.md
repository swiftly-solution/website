---
title: CMotionMatchingUpdateNode
---

```csharp
public interface CMotionMatchingUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CMotionMatchingUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BlendCurve** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L31)

```csharp
CBlendCurve BlendCurve { get; }
```

- Property Value

- [CBlendCurve](/docs/api/shared/schemadefinitions/cblendcurve)

### **BlendTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L35)

```csharp
ref float BlendTime { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DataSet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L16)

```csharp
CMotionDataSet DataSet { get; }
```

- Property Value

- [CMotionDataSet](/docs/api/shared/schemadefinitions/cmotiondataset)

### **DistanceScale_Damping** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L51)

```csharp
CAnimInputDamping DistanceScale_Damping { get; }
```

- Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### **DistanceScale_InnerRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L55)

```csharp
ref float DistanceScale_InnerRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DistanceScale_MaxScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L57)

```csharp
ref float DistanceScale_MaxScale { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DistanceScale_MinScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L59)

```csharp
ref float DistanceScale_MinScale { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DistanceScale_OuterRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L53)

```csharp
ref float DistanceScale_OuterRadius { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **EnableDistanceScaling** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L61)

```csharp
ref bool EnableDistanceScaling { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EnableRotationCorrection** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L43)

```csharp
ref bool EnableRotationCorrection { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GoalAssist** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L45)

```csharp
ref bool GoalAssist { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GoalAssistDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L47)

```csharp
ref float GoalAssistDistance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GoalAssistTolerance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L49)

```csharp
ref float GoalAssistTolerance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **LockClipWhenWaning** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L37)

```csharp
ref bool LockClipWhenWaning { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Metrics** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L19)

```csharp
ref CUtlVector Metrics { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **ReselectionTimeWindow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L41)

```csharp
ref float ReselectionTimeWindow { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SampleRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L33)

```csharp
ref float SampleRate { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SearchEveryTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L23)

```csharp
ref bool SearchEveryTick { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SearchInterval** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L25)

```csharp
ref float SearchInterval { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SearchWhenClipEnds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L27)

```csharp
ref bool SearchWhenClipEnds { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SearchWhenGoalChanges** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L29)

```csharp
ref bool SearchWhenGoalChanges { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **SelectionThreshold** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L39)

```csharp
ref float SelectionThreshold { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Weights** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMatchingUpdateNode.cs#L21)

```csharp
ref CUtlVector<float> Weights { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

