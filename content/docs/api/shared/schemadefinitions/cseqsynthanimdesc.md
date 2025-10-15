---
title: CSeqSynthAnimDesc
---

```csharp
public interface CSeqSynthAnimDesc : ISchemaClass<CSeqSynthAnimDesc>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ActivityArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L27)

```csharp
ref CUtlVector<CAnimActivity> ActivityArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimActivity](/docs/api/shared/schemadefinitions/canimactivity)>

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L19)

```csharp
CSeqSeqDescFlag Flags { get; }
```

#### Property Value

- [CSeqSeqDescFlag](/docs/api/shared/schemadefinitions/cseqseqdescflag)

### LocalBaseReference

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L23)

```csharp
ref short LocalBaseReference { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LocalBoneMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L25)

```csharp
ref short LocalBoneMask { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L17)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### Transition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqSynthAnimDesc.cs#L21)

```csharp
CSeqTransition Transition { get; }
```

#### Property Value

- [CSeqTransition](/docs/api/shared/schemadefinitions/cseqtransition)

