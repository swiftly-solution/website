---
title: CNavLinkMovementVData
---

# Interface CNavLinkMovementVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkMovementVData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNavLinkMovementVData : ISchemaClass<CNavLinkMovementVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CNavLinkMovementVData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimgraphVars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkMovementVData.cs#L25)

```csharp
ref CUtlVector<CNavLinkAnimgraphVar> AnimgraphVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CNavLinkAnimgraphVar](/docs/api/schemadefinitions/cnavlinkanimgraphvar)>

### IsInterpolated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkMovementVData.cs#L21)

```csharp
ref bool IsInterpolated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RecommendedDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkMovementVData.cs#L23)

```csharp
ref uint RecommendedDistance { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ToolsOnlyOwnerModelName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkMovementVData.cs#L19)

```csharp
SchemaUntypedField ToolsOnlyOwnerModelName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

