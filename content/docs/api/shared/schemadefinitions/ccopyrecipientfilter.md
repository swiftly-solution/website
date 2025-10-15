---
title: CCopyRecipientFilter
---

```csharp
public interface CCopyRecipientFilter : ISchemaClass<CCopyRecipientFilter>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Flags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCopyRecipientFilter.cs#L17)

```csharp
ref int Flags { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Recipients

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCopyRecipientFilter.cs#L19)

```csharp
ref CUtlVector<uint> Recipients { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

