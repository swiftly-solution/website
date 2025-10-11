---
title: CRenderSkeleton
---

```csharp
public interface CRenderSkeleton : ISchemaClass<CRenderSkeleton>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BoneParents** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L19)

```csharp
ref CUtlVector<int> BoneParents { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **BoneWeightCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L21)

```csharp
ref int BoneWeightCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Bones** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderSkeleton.cs#L17)

```csharp
ref CUtlVector Bones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

