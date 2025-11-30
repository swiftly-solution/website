---
title: CSeqS1SeqDesc
---

# Interface CSeqS1SeqDesc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSeqS1SeqDesc : ISchemaClass<CSeqS1SeqDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSeqS1SeqDesc>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActivityArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L37)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimActivity](/docs/api/schemadefinitions/canimactivity)>

### AutoLayerArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L26)

```csharp
ref CUtlVector<CSeqAutoLayer> AutoLayerArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqAutoLayer](/docs/api/schemadefinitions/cseqautolayer)>

### Fetch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L22)

```csharp
CSeqMultiFetch Fetch { get; }
```

#### Property Value

- [CSeqMultiFetch](/docs/api/schemadefinitions/cseqmultifetch)

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L20)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/schemadefinitions/cseqseqdescflag)

### FootMotion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L39)

```csharp
ref CUtlVector<CFootMotion> FootMotion { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CFootMotion](/docs/api/schemadefinitions/cfootmotion)>

### IKLockArray

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L28)

```csharp
ref CUtlVector<CSeqIKLock> IKLockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSeqIKLock](/docs/api/schemadefinitions/cseqiklock)>

### LegacyKeyValueText

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L35)

```csharp
ref CBufferString LegacyKeyValueText { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### LocalWeightlist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L24)

```csharp
ref int LocalWeightlist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L18)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/natives/cbufferstring)

### SequenceKeys

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L33)

```csharp
SchemaUntypedField SequenceKeys { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Transition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L30)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/schemadefinitions/cseqtransition)

