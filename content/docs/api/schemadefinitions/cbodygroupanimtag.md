---
title: CBodyGroupAnimTag
---

# Interface CBodyGroupAnimTag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyGroupAnimTag.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBodyGroupAnimTag : CAnimTagBase, ISchemaClass<CAnimTagBase>, ISchemaClass<CBodyGroupAnimTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimTagBase](/docs/api/schemadefinitions/canimtagbase)
- [ISchemaClass<CAnimTagBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBodyGroupAnimTag>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BodyGroupSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyGroupAnimTag.cs#L20)

```csharp
ref CUtlVector<CBodyGroupSetting> BodyGroupSettings { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CBodyGroupSetting](/docs/api/schemadefinitions/cbodygroupsetting)>

### Priority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBodyGroupAnimTag.cs#L18)

```csharp
ref int Priority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

