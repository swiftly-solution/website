---
title: CMotionNodeSequence
---

```csharp
public interface CMotionNodeSequence : CMotionNode, ISchemaClass<CMotionNode>, ISchemaClass<CMotionNodeSequence>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **PlaybackSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionNodeSequence.cs#L21)

```csharp
ref float PlaybackSpeed { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Sequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionNodeSequence.cs#L19)

```csharp
HSequence Sequence { get; }
```

- Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### **Tags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMotionNodeSequence.cs#L17)

```csharp
ref CUtlVector Tags { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

