---
title: CSeqCmdSeqDesc
---

# Interface CSeqCmdSeqDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSeqCmdSeqDesc : ISchemaClass<CSeqCmdSeqDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSeqCmdSeqDesc>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActivityArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L38)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimActivity](/docs/api/schemadefinitions/canimactivity)>

### CmdLayerArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L34)

```csharp
ref CUtlVector<CSeqCmdLayer> CmdLayerArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqCmdLayer](/docs/api/schemadefinitions/cseqcmdlayer)>

### EventArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L36)

```csharp
ref CUtlVector<CAnimEventDefinition> EventArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimEventDefinition](/docs/api/schemadefinitions/canimeventdefinition)>

### FPS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L28)

```csharp
ref float FPS { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L20)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/schemadefinitions/cseqseqdescflag)

### FrameCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L26)

```csharp
ref short FrameCount { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### FrameRangeSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L24)

```csharp
ref short FrameRangeSequence { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### NumLocalResults

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L32)

```csharp
ref short NumLocalResults { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### PoseSettingArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L40)

```csharp
ref CUtlVector<CSeqPoseSetting> PoseSettingArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqPoseSetting](/docs/api/schemadefinitions/cseqposesetting)>

### SubCycles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L30)

```csharp
ref short SubCycles { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Transition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqCmdSeqDesc.cs#L22)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/schemadefinitions/cseqtransition)

