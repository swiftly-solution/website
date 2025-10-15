---
title: CSeqScaleSet
---

```csharp
public interface CSeqScaleSet : ISchemaClass<CSeqScaleSet>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneScaleArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L25)

```csharp
ref CUtlVector<float> BoneScaleArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### LocalBoneArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L23)

```csharp
ref CUtlVector<short> LocalBoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L17)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### RootOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L19)

```csharp
ref bool RootOffset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RootOffset1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSeqScaleSet.cs#L21)

```csharp
ref Vector RootOffset1 { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

