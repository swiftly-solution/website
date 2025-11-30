---
title: CSequenceGroupData
---

# Interface CSequenceGroupData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSequenceGroupData : ISchemaClass<CSequenceGroupData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSequenceGroupData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L20)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### KeyValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L43)

```csharp
SchemaUntypedField KeyValues { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### LocalBoneMaskArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L32)

```csharp
ref CUtlVector<CSeqBoneMaskList> LocalBoneMaskArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqBoneMaskList](/docs/api/schemadefinitions/cseqbonemasklist)>

### LocalBoneNameArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L36)

```csharp
ref CUtlVector<CBufferString> LocalBoneNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CBufferString](/docs/api/natives/cbufferstring)>

### LocalCmdSeqDescArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L30)

```csharp
ref CUtlVector<CSeqCmdSeqDesc> LocalCmdSeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqCmdSeqDesc](/docs/api/schemadefinitions/cseqcmdseqdesc)>

### LocalIKAutoplayLockArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L45)

```csharp
ref CUtlVector<CSeqIKLock> LocalIKAutoplayLockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqIKLock](/docs/api/schemadefinitions/cseqiklock)>

### LocalMultiSeqDescArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L26)

```csharp
ref CUtlVector<CSeqS1SeqDesc> LocalMultiSeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqS1SeqDesc](/docs/api/schemadefinitions/cseqs1seqdesc)>

### LocalNodeName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L38)

```csharp
ref CBufferString LocalNodeName { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### LocalPoseParamArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L40)

```csharp
ref CUtlVector<CSeqPoseParamDesc> LocalPoseParamArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqPoseParamDesc](/docs/api/schemadefinitions/cseqposeparamdesc)>

### LocalS1SeqDescArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L24)

```csharp
ref CUtlVector<CSeqS1SeqDesc> LocalS1SeqDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqS1SeqDesc](/docs/api/schemadefinitions/cseqs1seqdesc)>

### LocalScaleSetArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L34)

```csharp
ref CUtlVector<CSeqScaleSet> LocalScaleSetArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqScaleSet](/docs/api/schemadefinitions/cseqscaleset)>

### LocalSequenceNameArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L22)

```csharp
ref CUtlVector<CBufferString> LocalSequenceNameArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CBufferString](/docs/api/natives/cbufferstring)>

### LocalSynthAnimDescArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L28)

```csharp
ref CUtlVector<CSeqSynthAnimDesc> LocalSynthAnimDescArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqSynthAnimDesc](/docs/api/schemadefinitions/cseqsynthanimdesc)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSequenceGroupData.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

