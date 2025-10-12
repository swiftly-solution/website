---
title: CSingleFrameUpdateNode
---

```csharp
public interface CSingleFrameUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CSingleFrameUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Actions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L17)

```csharp
ref CUtlVector Actions { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **Cycle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L23)

```csharp
ref float Cycle { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **PoseCacheHandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L19)

```csharp
CPoseHandle PoseCacheHandle { get; }
```

- Property Value

- [CPoseHandle](/docs/api/shared/schemadefinitions/cposehandle)

### **Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L21)

```csharp
HSequence Sequence { get; }
```

- Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

