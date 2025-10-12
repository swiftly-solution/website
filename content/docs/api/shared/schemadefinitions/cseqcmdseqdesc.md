---
title: CSeqCmdSeqDesc
---

```csharp
public interface CSeqCmdSeqDesc : ISchemaClass<CSeqCmdSeqDesc>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **ActivityArray** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L39)

```csharp
ref CUtlVector ActivityArray { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **CmdLayerArray** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L33)

```csharp
ref CUtlVector CmdLayerArray { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **EventArray** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L36)

```csharp
ref CUtlVector EventArray { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **FPS** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L26)

```csharp
ref float FPS { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L18)

```csharp
CSeqSeqDescFlag Flags { get; }
```

- Property Value

- [CSeqSeqDescFlag](/docs/api/shared/schemadefinitions/cseqseqdescflag)

### **FrameCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L24)

```csharp
ref short FrameCount { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **FrameRangeSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L22)

```csharp
ref short FrameRangeSequence { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L16)

```csharp
ref CBufferString Name { get; }
```

- Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### **NumLocalResults** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L30)

```csharp
ref short NumLocalResults { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **PoseSettingArray** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L42)

```csharp
ref CUtlVector PoseSettingArray { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **SubCycles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L28)

```csharp
ref short SubCycles { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **Transition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L20)

```csharp
CSeqTransition Transition { get; }
```

- Property Value

- [CSeqTransition](/docs/api/shared/schemadefinitions/cseqtransition)

