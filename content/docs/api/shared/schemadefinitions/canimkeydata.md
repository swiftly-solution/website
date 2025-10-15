---
title: CAnimKeyData
---

```csharp
public interface CAnimKeyData : ISchemaClass<CAnimKeyData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimKeyData.cs#L19)

```csharp
ref CUtlVector<CAnimBone> BoneArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimBone](/docs/api/shared/schemadefinitions/canimbone)>

### ChannelElements

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimKeyData.cs#L25)

```csharp
ref int ChannelElements { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DataChannelArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimKeyData.cs#L27)

```csharp
ref CUtlVector<CAnimDataChannelDesc> DataChannelArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimDataChannelDesc](/docs/api/shared/schemadefinitions/canimdatachanneldesc)>

### MorphArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimKeyData.cs#L23)

```csharp
ref CUtlVector<CBufferString> MorphArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBufferString](/docs/api/shared/natives/cbufferstring)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimKeyData.cs#L17)

```csharp
ref CBufferString Name { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

### UserArray

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimKeyData.cs#L21)

```csharp
ref CUtlVector<CAnimUser> UserArray { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimUser](/docs/api/shared/schemadefinitions/canimuser)>

