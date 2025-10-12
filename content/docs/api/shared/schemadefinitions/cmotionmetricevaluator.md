---
title: CMotionMetricEvaluator
---

```csharp
public interface CMotionMetricEvaluator : ISchemaClass<CMotionMetricEvaluator>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **DimensionStartIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMetricEvaluator.cs#L22)

```csharp
ref int DimensionStartIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Means** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMetricEvaluator.cs#L16)

```csharp
ref CUtlVector<float> Means { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **StandardDeviations** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMetricEvaluator.cs#L18)

```csharp
ref CUtlVector<float> StandardDeviations { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **Weight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionMetricEvaluator.cs#L20)

```csharp
ref float Weight { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

