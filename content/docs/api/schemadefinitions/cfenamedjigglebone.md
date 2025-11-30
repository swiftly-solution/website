---
title: CFeNamedJiggleBone
---

# Interface CFeNamedJiggleBone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFeNamedJiggleBone : ISchemaClass<CFeNamedJiggleBone>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CFeNamedJiggleBone>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### JiggleBone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L24)

```csharp
CFeJiggleBone JiggleBone { get; }
```

#### Property Value

- [CFeJiggleBone](/docs/api/schemadefinitions/cfejigglebone)

### JiggleParent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L22)

```csharp
ref uint JiggleParent { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### StrParentBone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L18)

```csharp
string StrParentBone { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Transform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeNamedJiggleBone.cs#L20)

```csharp
ref CTransform Transform { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

