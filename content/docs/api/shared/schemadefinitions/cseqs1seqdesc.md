---
title: CSeqS1SeqDesc
---

```csharp
public interface CSeqS1SeqDesc : ISchemaClass<CSeqS1SeqDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActivityArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L38)

```csharp
ref CUtlVector ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### AutoLayerArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L25)

```csharp
ref CUtlVector AutoLayerArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### Fetch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L20)

```csharp
CSeqMultiFetch Fetch { get; }
```

#### Property Value

- [CSeqMultiFetch](/docs/api/shared/schemadefinitions/cseqmultifetch)

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L18)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/shared/schemadefinitions/cseqseqdescflag)

### FootMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L41)

```csharp
ref CUtlVector FootMotion { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### IKLockArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L28)

```csharp
ref CUtlVector IKLockArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### LegacyKeyValueText

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L35)

```csharp
ref CBufferString LegacyKeyValueText { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### LocalWeightlist

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L22)

```csharp
ref int LocalWeightlist { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L16)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### SequenceKeys

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L33)

```csharp
SchemaUntypedField SequenceKeys { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Transition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqS1SeqDesc.cs#L30)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/shared/schemadefinitions/cseqtransition)

