---
title: WeightList
---

```csharp
public interface WeightList : ISchemaClass<WeightList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WeightList.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Weights** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/WeightList.cs#L18)

```csharp
ref CUtlVector<float> Weights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

