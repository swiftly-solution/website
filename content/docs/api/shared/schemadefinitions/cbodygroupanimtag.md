---
title: CBodyGroupAnimTag
---

```csharp
public interface CBodyGroupAnimTag : CAnimTagBase, ISchemaClass<CAnimTagBase>, ISchemaClass<CBodyGroupAnimTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BodyGroupSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyGroupAnimTag.cs#L20)

```csharp
ref CUtlVector<CBodyGroupSetting> BodyGroupSettings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CBodyGroupSetting](/docs/api/shared/schemadefinitions/cbodygroupsetting)>

### Priority

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyGroupAnimTag.cs#L18)

```csharp
ref int Priority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

