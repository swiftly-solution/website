---
title: CAnimationGroup
---

```csharp
public interface CAnimationGroup : ISchemaClass<CAnimationGroup>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AdditionalExtRefs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L31)

```csharp
ref CUtlVector<SchemaUntypedField> AdditionalExtRefs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)>

### DecodeKey

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L27)

```csharp
CAnimKeyData DecodeKey { get; }
```

#### Property Value

- [CAnimKeyData](/docs/api/shared/schemadefinitions/canimkeydata)

### DirectHSeqGroup_Handle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L25)

```csharp
ref CStrongHandle<InfoForResourceTypeCSequenceGroupData> DirectHSeqGroup_Handle { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCSequenceGroupData](/docs/api/shared/schemadefinitions/infoforresourcetypecsequencegroupdata)>

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L17)

```csharp
ref uint Flags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### IncludedGroupArray_Handle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L23)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCAnimationGroup>> IncludedGroupArray_Handle { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCAnimationGroup](/docs/api/shared/schemadefinitions/infoforresourcetypecanimationgroup)>>

### LocalHAnimArray_Handle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L21)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCAnimData>> LocalHAnimArray_Handle { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCAnimData](/docs/api/shared/schemadefinitions/infoforresourcetypecanimdata)>>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L19)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### Scripts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimationGroup.cs#L29)

```csharp
ref CUtlVector<CBufferString> Scripts { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBufferString](/docs/api/shared/natives/cbufferstring)>

