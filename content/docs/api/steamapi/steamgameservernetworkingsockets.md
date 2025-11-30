---
title: SteamGameServerNetworkingSockets
---

# Class SteamGameServerNetworkingSockets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L6)

**Namespace**: [SwiftlyS2.Shared.SteamAPI](/docs/api/steamapi)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public static class SteamGameServerNetworkingSockets
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SteamGameServerNetworkingSockets](/docs/api/steamapi/steamgameservernetworkingsockets)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AcceptConnection(HSteamNetConnection)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L151)

<p>/ Accept an incoming connection that has been received on a listen socket.</p>
<p>/</p>
<p>/ When a connection attempt is received (perhaps after a few basic handshake</p>
<p>/ packets have been exchanged to prevent trivial spoofing), a connection interface</p>
<p>/ object is created in the k_ESteamNetworkingConnectionState_Connecting state</p>
<p>/ and a SteamNetConnectionStatusChangedCallback_t is posted.  At this point, your</p>
<p>/ application MUST either accept or close the connection.  (It may not ignore it.)</p>
<p>/ Accepting the connection will transition it either into the connected state,</p>
<p>/ or the finding route state, depending on the connection type.</p>
<p>/</p>
<p>/ You should take action within a second or two, because accepting the connection is</p>
<p>/ what actually sends the reply notifying the client that they are connected.  If you</p>
<p>/ delay taking action, from the client's perspective it is the same as the network</p>
<p>/ being unresponsive, and the client may timeout the connection attempt.  In other</p>
<p>/ words, the client cannot distinguish between a delay caused by network problems</p>
<p>/ and a delay caused by the application.</p>
<p>/</p>
<p>/ This means that if your application goes for more than a few seconds without</p>
<p>/ processing callbacks (for example, while loading a map), then there is a chance</p>
<p>/ that a client may attempt to connect in that interval and fail due to timeout.</p>
<p>/</p>
<p>/ If the application does not respond to the connection attempt in a timely manner,</p>
<p>/ and we stop receiving communication from the client, the connection attempt will</p>
<p>/ be timed out locally, transitioning the connection to the</p>
<p>/ k_ESteamNetworkingConnectionState_ProblemDetectedLocally state.  The client may also</p>
<p>/ close the connection before it is accepted, and a transition to the</p>
<p>/ k_ESteamNetworkingConnectionState_ClosedByPeer is also possible depending the exact</p>
<p>/ sequence of events.</p>
<p>/</p>
<p>/ Returns k_EResultInvalidParam if the handle is invalid.</p>
<p>/ Returns k_EResultInvalidState if the connection is not in the appropriate state.</p>
<p>/ (Remember that the connection state could change in between the time that the</p>
<p>/ notification being posted to the queue and when it is received by the application.)</p>
<p>/</p>
<p>/ A note about connection configuration options.  If you need to set any configuration</p>
<p>/ options that are common to all connections accepted through a particular listen</p>
<p>/ socket, consider setting the options on the listen socket, since such options are</p>
<p>/ inherited automatically.  If you really do need to set options that are connection</p>
<p>/ specific, it is safe to set them on the connection before accepting the connection.</p>

```csharp
public static EResult AcceptConnection(HSteamNetConnection hConn)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### BeginAsyncRequestFakeIP(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1018)

<p> "FakeIP" system.</p>
<p> A FakeIP is essentially a temporary, arbitrary identifier that</p>
<p> happens to be a valid IPv4 address.  The purpose of this system is to make it</p>
<p> easy to integrate with existing code that identifies hosts using IPv4 addresses.</p>
<p> The FakeIP address will never actually be used to send or receive any packets</p>
<p> on the Internet, it is strictly an identifier.</p>
<p> FakeIP addresses are designed to (hopefully) pass through existing code as</p>
<p> transparently as possible, while conflicting with "real" addresses that might</p>
<p> be in use on networks (both the Internet and LANs) in the same code as little</p>
<p> as possible.  At the time this comment is being written, they come from the</p>
<p> 169.254.0.0/16 range, and the port number will always be &gt;1024.  HOWEVER,</p>
<p> this is subject to change!  Do not make assumptions about these addresses,</p>
<p> or your code might break in the future.  In particular, you should use</p>
<p> functions such as  ISteamNetworkingUtils::IsFakeIP to determine if an IP</p>
<p> address is a "fake" one used by this system.</p>
<p>/ Begin asynchronous process of allocating a fake IPv4 address that other</p>
<p>/ peers can use to contact us via P2P.  IP addresses returned by this</p>
<p>/ function are globally unique for a given appid.</p>
<p>/</p>
<p>/ nNumPorts is the numbers of ports you wish to reserve.  This is useful</p>
<p>/ for the same reason that listening on multiple UDP ports is useful for</p>
<p>/ different types of traffic.  Because these allocations come from a global</p>
<p>/ namespace, there is a relatively strict limit on the maximum number of</p>
<p>/ ports you may request.  (At the time of this writing, the limit is 4.)</p>
<p>/ The port assignments are *not* guaranteed to have any particular order</p>
<p>/ or relationship!  Do *not* assume they are contiguous, even though that</p>
<p>/ may often occur in practice.</p>
<p>/</p>
<p>/ Returns false if a request was already in progress, true if a new request</p>
<p>/ was started.  A SteamNetworkingFakeIPResult_t will be posted when the request</p>
<p>/ completes.</p>
<p>/</p>
<p>/ For gameservers, you *must* call this after initializing the SDK but before</p>
<p>/ beginning login.  Steam needs to know in advance that FakeIP will be used.</p>
<p>/ Everywhere your public IP would normally appear (such as the server browser) will be</p>
<p>/ replaced by the FakeIP, and the fake port at index 0.  The request is actually queued</p>
<p>/ until the logon completes, so you must not wait until the allocation completes</p>
<p>/ before logging in.  Except for trivial failures that can be detected locally</p>
<p>/ (e.g. invalid parameter), a SteamNetworkingFakeIPResult_t callback (whether success or</p>
<p>/ failure) will not be posted until after we have logged in.  Furthermore, it is assumed</p>
<p>/ that FakeIP allocation is essential for your application to function, and so failure</p>
<p>/ will not be reported until *several* retries have been attempted.  This process may</p>
<p>/ last several minutes.  It is *highly* recommended to treat failure as fatal.</p>
<p>/</p>
<p>/ To communicate using a connection-oriented (TCP-style) API:</p>
<p>/ - Server creates a listen socket using CreateListenSocketP2PFakeIP</p>
<p>/ - Client connects using ConnectByIPAddress, passing in the FakeIP address.</p>
<p>/ - The connection will behave mostly like a P2P connection.  The identities</p>
<p>/   that appear in SteamNetConnectionInfo_t will be the FakeIP identity until</p>
<p>/   we know the real identity.  Then it will be the real identity.  If the</p>
<p>/   SteamNetConnectionInfo_t::m_addrRemote is valid, it will be a real IPv4</p>
<p>/   address of a NAT-punched connection.  Otherwise, it will not be valid.</p>
<p>/</p>
<p>/ To communicate using an ad-hoc sendto/recv from (UDP-style) API,</p>
<p>/ use CreateFakeUDPPort.</p>

```csharp
public static bool BeginAsyncRequestFakeIP(int nNumPorts)
```

#### Parameters

- **nNumPorts**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseConnection(HSteamNetConnection, int, string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L179)

<p>/ Disconnects from the remote host and invalidates the connection handle.</p>
<p>/ Any unread data on the connection is discarded.</p>
<p>/</p>
<p>/ nReason is an application defined code that will be received on the other</p>
<p>/ end and recorded (when possible) in backend analytics.  The value should</p>
<p>/ come from a restricted range.  (See ESteamNetConnectionEnd.)  If you don't need</p>
<p>/ to communicate any information to the remote host, and do not want analytics to</p>
<p>/ be able to distinguish "normal" connection terminations from "exceptional" ones,</p>
<p>/ You may pass zero, in which case the generic value of</p>
<p>/ k_ESteamNetConnectionEnd_App_Generic will be used.</p>
<p>/</p>
<p>/ pszDebug is an optional human-readable diagnostic string that will be received</p>
<p>/ by the remote host and recorded (when possible) in backend analytics.</p>
<p>/</p>
<p>/ If you wish to put the socket into a "linger" state, where an attempt is made to</p>
<p>/ flush any remaining sent data, use bEnableLinger=true.  Otherwise reliable data</p>
<p>/ is not flushed.</p>
<p>/</p>
<p>/ If the connection has already ended and you are just freeing up the</p>
<p>/ connection interface, the reason code, debug string, and linger flag are</p>
<p>/ ignored.</p>

```csharp
public static bool CloseConnection(HSteamNetConnection hPeer, int nReason, string pszDebug, bool bEnableLinger)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **nReason**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pszDebug**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **bEnableLinger**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseListenSocket(HSteamListenSocket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L190)

<p>/ Destroy a listen socket.  All the connections that were accepting on the listen</p>
<p>/ socket are closed ungracefully.</p>

```csharp
public static bool CloseListenSocket(HSteamListenSocket hSocket)
```

#### Parameters

- **hSocket**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConfigureConnectionLanes(HSteamNetConnection, int, out int, out ushort)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L535)

<p>/ Configure multiple outbound messages streams ("lanes") on a connection, and</p>
<p>/ control head-of-line blocking between them.  Messages within a given lane</p>
<p>/ are always sent in the order they are queued, but messages from different</p>
<p>/ lanes may be sent out of order.  Each lane has its own message number</p>
<p>/ sequence.  The first message sent on each lane will be assigned the number 1.</p>
<p>/</p>
<p>/ Each lane has a "priority".  Lanes with higher numeric values will only be processed</p>
<p>/ when all lanes with lower number values are empty.  The magnitudes of the priority</p>
<p>/ values are not relevant, only their sort order.</p>
<p>/</p>
<p>/ Each lane also is assigned a weight, which controls the approximate proportion</p>
<p>/ of the bandwidth that will be consumed by the lane, relative to other lanes</p>
<p>/ of the same priority.  (This is assuming the lane stays busy.  An idle lane</p>
<p>/ does not build up "credits" to be be spent once a message is queued.)</p>
<p>/ This value is only meaningful as a proportion, relative to other lanes with</p>
<p>/ the same priority.  For lanes with different priorities, the strict priority</p>
<p>/ order will prevail, and their weights relative to each other are not relevant.</p>
<p>/ Thus, if a lane has a unique priority value, the weight value for that lane is</p>
<p>/ not relevant.</p>
<p>/</p>
<p>/ Example: 3 lanes, with priorities [ 0, 10, 10 ] and weights [ (NA), 20, 5 ].</p>
<p>/ Messages sent on the first will always be sent first, before messages in the</p>
<p>/ other two lanes.  Its weight value is irrelevant, since there are no other</p>
<p>/ lanes with priority=0.  The other two lanes will share bandwidth, with the second</p>
<p>/ and third lanes sharing bandwidth using a ratio of approximately 4:1.</p>
<p>/ (The weights [ NA, 4, 1 ] would be equivalent.)</p>
<p>/</p>
<p>/ Notes:</p>
<p>/ - At the time of this writing, some code has performance cost that is linear</p>
<p>/   in the number of lanes, so keep the number of lanes to an absolute minimum.</p>
<p>/   3 or so is fine; &gt;8 is a lot.  The max number of lanes on Steam is 255,</p>
<p>/   which is a very large number and not recommended!  If you are compiling this</p>
<p>/   library from source, see STEAMNETWORKINGSOCKETS_MAX_LANES.)</p>
<p>/ - Lane priority values may be any int.  Their absolute value is not relevant,</p>
<p>/   only the order matters.</p>
<p>/ - Weights must be positive, and due to implementation details, they are restricted</p>
<p>/   to 16-bit values.  The absolute magnitudes don't matter, just the proportions.</p>
<p>/ - Messages sent on a lane index other than 0 have a small overhead on the wire,</p>
<p>/   so for maximum wire efficiency, lane 0 should be the "most common" lane, regardless</p>
<p>/   of priorities or weights.</p>
<p>/ - A connection has a single lane by default.  Calling this function with</p>
<p>/   nNumLanes=1 is legal, but pointless, since the priority and weight values are</p>
<p>/   irrelevant in that case.</p>
<p>/ - You may reconfigure connection lanes at any time, however reducing the number of</p>
<p>/   lanes is not allowed.</p>
<p>/ - Reconfiguring lanes might restart any bandwidth sharing balancing.  Usually you</p>
<p>/   will call this function once, near the start of the connection, perhaps after</p>
<p>/   exchanging a few messages.</p>
<p>/ - To assign all lanes the same priority, you may use pLanePriorities=NULL.</p>
<p>/ - If you wish all lanes with the same priority to share bandwidth equally (or</p>
<p>/   if no two lanes have the same priority value, and thus priority values are</p>
<p>/   irrelevant), you may use pLaneWeights=NULL</p>
<p>/ - Priorities and weights determine the order that messages are SENT on the wire.</p>
<p>/   There are NO GUARANTEES on the order that messages are RECEIVED!  Due to packet</p>
<p>/   loss, out-of-order delivery, and subtle details of packet serialization, messages</p>
<p>/   might still be received slightly out-of-order!  The *only* strong guarantee is that</p>
<p>/   *reliable* messages on the *same lane* will be delivered in the order they are sent.</p>
<p>/ - Each host configures the lanes for the packets they send; the lanes for the flow</p>
<p>/   in one direction are completely unrelated to the lanes in the opposite direction.</p>
<p>/</p>
<p>/ Return value:</p>
<p>/ - k_EResultNoConnection - bad hConn</p>
<p>/ - k_EResultInvalidParam - Invalid number of lanes, bad weights, or you tried to reduce the number of lanes</p>
<p>/ - k_EResultInvalidState - Connection is already dead, etc</p>
<p>/</p>
<p>/ See also:</p>
<p>/ SteamNetworkingMessage_t::m_idxLane</p>

```csharp
public static EResult ConfigureConnectionLanes(HSteamNetConnection hConn, int nNumLanes, out int pLanePriorities, out ushort pLaneWeights)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **nNumLanes**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pLanePriorities**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pLaneWeights**: [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### ConnectByIPAddress(ref SteamNetworkingIPAddr, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L57)

<p>/ Creates a connection and begins talking to a "server" over UDP at the</p>
<p>/ given IPv4 or IPv6 address.  The remote host must be listening with a</p>
<p>/ matching call to CreateListenSocketIP on the specified port.</p>
<p>/</p>
<p>/ A SteamNetConnectionStatusChangedCallback_t callback will be triggered when we start</p>
<p>/ connecting, and then another one on either timeout or successful connection.</p>
<p>/</p>
<p>/ If the server does not have any identity configured, then their network address</p>
<p>/ will be the only identity in use.  Or, the network host may provide a platform-specific</p>
<p>/ identity with or without a valid certificate to authenticate that identity.  (These</p>
<p>/ details will be contained in the SteamNetConnectionStatusChangedCallback_t.)  It's</p>
<p>/ up to your application to decide whether to allow the connection.</p>
<p>/</p>
<p>/ By default, all connections will get basic encryption sufficient to prevent</p>
<p>/ casual eavesdropping.  But note that without certificates (or a shared secret</p>
<p>/ distributed through some other out-of-band mechanism), you don't have any</p>
<p>/ way of knowing who is actually on the other end, and thus are vulnerable to</p>
<p>/ man-in-the-middle attacks.</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>

```csharp
public static HSteamNetConnection ConnectByIPAddress(ref SteamNetworkingIPAddr address, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **address**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

### ConnectP2P(ref SteamNetworkingIdentity, int, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L105)

<p>/ Begin connecting to a peer that is identified using a platform-specific identifier.</p>
<p>/ This uses the default rendezvous service, which depends on the platform and library</p>
<p>/ configuration.  (E.g. on Steam, it goes through the steam backend.)</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>
<p>/</p>
<p>/ To use your own signaling service, see:</p>
<p>/ - ConnectP2PCustomSignaling</p>
<p>/ - k_ESteamNetworkingConfig_Callback_CreateConnectionSignaling</p>

```csharp
public static HSteamNetConnection ConnectP2P(ref SteamNetworkingIdentity identityRemote, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **identityRemote**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

### ConnectP2PCustomSignaling(out ISteamNetworkingConnectionSignaling, ref SteamNetworkingIdentity, int, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L868)

<p> Relayed connections using custom signaling protocol</p>
<p> This is used if you have your own method of sending out-of-band</p>
<p> signaling / rendezvous messages through a mutually trusted channel.</p>
<p>/ Create a P2P "client" connection that does signaling over a custom</p>
<p>/ rendezvous/signaling channel.</p>
<p>/</p>
<p>/ pSignaling points to a new object that you create just for this connection.</p>
<p>/ It must stay valid until Release() is called.  Once you pass the</p>
<p>/ object to this function, it assumes ownership.  Release() will be called</p>
<p>/ from within the function call if the call fails.  Furthermore, until Release()</p>
<p>/ is called, you should be prepared for methods to be invoked on your</p>
<p>/ object from any thread!  You need to make sure your object is threadsafe!</p>
<p>/ Furthermore, you should make sure that dispatching the methods is done</p>
<p>/ as quickly as possible.</p>
<p>/</p>
<p>/ This function will immediately construct a connection in the "connecting"</p>
<p>/ state.  Soon after (perhaps before this function returns, perhaps in another thread),</p>
<p>/ the connection will begin sending signaling messages by calling</p>
<p>/ ISteamNetworkingConnectionSignaling::SendSignal.</p>
<p>/</p>
<p>/ When the remote peer accepts the connection (See</p>
<p>/ ISteamNetworkingSignalingRecvContext::OnConnectRequest),</p>
<p>/ it will begin sending signaling messages.  When these messages are received,</p>
<p>/ you can pass them to the connection using ReceivedP2PCustomSignal.</p>
<p>/</p>
<p>/ If you know the identity of the peer that you expect to be on the other end,</p>
<p>/ you can pass their identity to improve debug output or just detect bugs.</p>
<p>/ If you don't know their identity yet, you can pass NULL, and their</p>
<p>/ identity will be established in the connection handshake.</p>
<p>/</p>
<p>/ If you use this, you probably want to call ISteamNetworkingUtils::InitRelayNetworkAccess()</p>
<p>/ when your app initializes</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>

```csharp
public static HSteamNetConnection ConnectP2PCustomSignaling(out ISteamNetworkingConnectionSignaling pSignaling, ref SteamNetworkingIdentity pPeerIdentity, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **pSignaling**: [ISteamNetworkingConnectionSignaling](/docs/api/steamapi/isteamnetworkingconnectionsignaling)
- **pPeerIdentity**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

### ConnectToHostedDedicatedServer(ref SteamNetworkingIdentity, int, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L711)

<p>/ Client call to connect to a server hosted in a Valve data center, on the specified virtual</p>
<p>/ port.  You must have placed a ticket for this server into the cache, or else this connect</p>
<p>/ attempt will fail!  If you are not issuing your own tickets, then to connect to a dedicated</p>
<p>/ server via SDR in auto-ticket mode, use ConnectP2P.  (The server must be configured to allow</p>
<p>/ this type of connection by listening using CreateListenSocketP2P.)</p>
<p>/</p>
<p>/ You may wonder why tickets are stored in a cache, instead of simply being passed as an argument</p>
<p>/ here.  The reason is to make reconnection to a gameserver robust, even if the client computer loses</p>
<p>/ connection to Steam or the central backend, or the app is restarted or crashes, etc.</p>
<p>/</p>
<p>/ If you use this, you probably want to call ISteamNetworkingUtils::InitRelayNetworkAccess()</p>
<p>/ when your app initializes</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>

```csharp
public static HSteamNetConnection ConnectToHostedDedicatedServer(ref SteamNetworkingIdentity identityTarget, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **identityTarget**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

### CreateFakeUDPPort(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1090)

<p>/ Get an interface that can be used like a UDP port to send/receive</p>
<p>/ datagrams to a FakeIP address.  This is intended to make it easy</p>
<p>/ to port existing UDP-based code to take advantage of SDR.</p>
<p>/</p>
<p>/ idxFakeServerPort refers to the *index* of the port allocated using</p>
<p>/ BeginAsyncRequestFakeIP and is used to create "server" ports.  You may</p>
<p>/ call this before the allocation has completed.  However, any attempts</p>
<p>/ to send packets will fail until the allocation has succeeded.  When</p>
<p>/ the peer receives packets sent from this interface, the from address</p>
<p>/ of the packet will be the globally-unique FakeIP.  If you call this</p>
<p>/ function multiple times and pass the same (nonnegative) fake port index,</p>
<p>/ the same object will be returned, and this object is not reference counted.</p>
<p>/</p>
<p>/ To create a "client" port (e.g. the equivalent of an ephemeral UDP port)</p>
<p>/ pass -1.  In this case, a distinct object will be returned for each call.</p>
<p>/ When the peer receives packets sent from this interface, the peer will</p>
<p>/ assign a FakeIP from its own locally-controlled namespace.</p>

```csharp
public static nint CreateFakeUDPPort(int idxFakeServerPort)
```

#### Parameters

- **idxFakeServerPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### CreateHostedDedicatedServerListenSocket(int, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L788)

<p>/ Create a listen socket on the specified virtual port.  The physical UDP port to use</p>
<p>/ will be determined by the SDR_LISTEN_PORT environment variable.  If a UDP port is not</p>
<p>/ configured, this call will fail.</p>
<p>/</p>
<p>/ This call MUST be made through the SteamGameServerNetworkingSockets() interface.</p>
<p>/</p>
<p>/ This function should be used when you are using the ticket generator library</p>
<p>/ to issue your own tickets.  Clients connecting to the server on this virtual</p>
<p>/ port will need a ticket, and they must connect using ConnectToHostedDedicatedServer.</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>

```csharp
public static HSteamListenSocket CreateHostedDedicatedServerListenSocket(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **nLocalVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### CreateListenSocketIP(ref SteamNetworkingIPAddr, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L28)

<p>/ Creates a "server" socket that listens for clients to connect to by</p>
<p>/ calling ConnectByIPAddress, over ordinary UDP (IPv4 or IPv6)</p>
<p>/</p>
<p>/ You must select a specific local port to listen on and set it</p>
<p>/ the port field of the local address.</p>
<p>/</p>
<p>/ Usually you will set the IP portion of the address to zero (SteamNetworkingIPAddr::Clear()).</p>
<p>/ This means that you will not bind to any particular local interface (i.e. the same</p>
<p>/ as INADDR_ANY in plain socket code).  Furthermore, if possible the socket will be bound</p>
<p>/ in "dual stack" mode, which means that it can accept both IPv4 and IPv6 client connections.</p>
<p>/ If you really do wish to bind a particular interface, then set the local address to the</p>
<p>/ appropriate IPv4 or IPv6 IP.</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>
<p>/</p>
<p>/ When a client attempts to connect, a SteamNetConnectionStatusChangedCallback_t</p>
<p>/ will be posted.  The connection will be in the connecting state.</p>

```csharp
public static HSteamListenSocket CreateListenSocketIP(ref SteamNetworkingIPAddr localAddress, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **localAddress**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### CreateListenSocketP2P(int, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L87)

<p>/ Like CreateListenSocketIP, but clients will connect using ConnectP2P.</p>
<p>/</p>
<p>/ nLocalVirtualPort specifies how clients can connect to this socket using</p>
<p>/ ConnectP2P.  It's very common for applications to only have one listening socket;</p>
<p>/ in that case, use zero.  If you need to open multiple listen sockets and have clients</p>
<p>/ be able to connect to one or the other, then nLocalVirtualPort should be a small</p>
<p>/ integer (&lt;1000) unique to each listen socket you create.</p>
<p>/</p>
<p>/ If you use this, you probably want to call ISteamNetworkingUtils::InitRelayNetworkAccess()</p>
<p>/ when your app initializes.</p>
<p>/</p>
<p>/ If you are listening on a dedicated servers in known data center,</p>
<p>/ then you can listen using this function instead of CreateHostedDedicatedServerListenSocket,</p>
<p>/ to allow clients to connect without a ticket.  Any user that owns</p>
<p>/ the app and is signed into Steam will be able to attempt to connect to</p>
<p>/ your server.  Also, a connection attempt may require the client to</p>
<p>/ be connected to Steam, which is one more moving part that may fail.  When</p>
<p>/ tickets are used, then once a ticket is obtained, a client can connect to</p>
<p>/ your server even if they got disconnected from Steam or Steam is offline.</p>
<p>/</p>
<p>/ If you need to set any initial config options, pass them here.  See</p>
<p>/ SteamNetworkingConfigValue_t for more about why this is preferable to</p>
<p>/ setting the options "immediately" after creation.</p>

```csharp
public static HSteamListenSocket CreateListenSocketP2P(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **nLocalVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### CreateListenSocketP2PFakeIP(int, int, SteamNetworkingConfigValue_t[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1044)

<p>/ Create a listen socket that will listen for P2P connections sent</p>
<p>/ to our FakeIP.  A peer can initiate connections to this listen</p>
<p>/ socket by calling ConnectByIPAddress.</p>
<p>/</p>
<p>/ idxFakePort refers to the *index* of the fake port requested,</p>
<p>/ not the actual port number.  For example, pass 0 to refer to the</p>
<p>/ first port in the reservation.  You must call this only after calling</p>
<p>/ BeginAsyncRequestFakeIP.  However, you do not need to wait for the</p>
<p>/ request to complete before creating the listen socket.</p>

```csharp
public static HSteamListenSocket CreateListenSocketP2PFakeIP(int idxFakePort, int nOptions, SteamNetworkingConfigValue_t[] pOptions)
```

#### Parameters

- **idxFakePort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **nOptions**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOptions**: [SteamNetworkingConfigValue_t](/docs/api/steamapi/steamnetworkingconfigvalue_t)[]

#### Returns

- [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)

### CreatePollGroup()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L605)

<p> Poll groups.  A poll group is a set of connections that can be polled efficiently.</p>
<p> (In our API, to "poll" a connection means to retrieve all pending messages.  We</p>
<p> actually don't have an API to "poll" the connection *state*, like BSD sockets.)</p>
<p>/ Create a new poll group.</p>
<p>/</p>
<p>/ You should destroy the poll group when you are done using DestroyPollGroup</p>

```csharp
public static HSteamNetPollGroup CreatePollGroup()
```

#### Returns

- [HSteamNetPollGroup](/docs/api/steamapi/hsteamnetpollgroup)

### CreateSocketPair(out HSteamNetConnection, out HSteamNetConnection, bool, ref SteamNetworkingIdentity, ref SteamNetworkingIdentity)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L461)

<p>/ Create a pair of connections that are talking to each other, e.g. a loopback connection.</p>
<p>/ This is very useful for testing, or so that your client/server code can work the same</p>
<p>/ even when you are running a local "server".</p>
<p>/</p>
<p>/ The two connections will immediately be placed into the connected state, and no callbacks</p>
<p>/ will be posted immediately.  After this, if you close either connection, the other connection</p>
<p>/ will receive a callback, exactly as if they were communicating over the network.  You must</p>
<p>/ close *both* sides in order to fully clean up the resources!</p>
<p>/</p>
<p>/ By default, internal buffers are used, completely bypassing the network, the chopping up of</p>
<p>/ messages into packets, encryption, copying the payload, etc.  This means that loopback</p>
<p>/ packets, by default, will not simulate lag or loss.  Passing true for bUseNetworkLoopback will</p>
<p>/ cause the socket pair to send packets through the local network loopback device (127.0.0.1)</p>
<p>/ on ephemeral ports.  Fake lag and loss are supported in this case, and CPU time is expended</p>
<p>/ to encrypt and decrypt.</p>
<p>/</p>
<p>/ If you wish to assign a specific identity to either connection, you may pass a particular</p>
<p>/ identity.  Otherwise, if you pass nullptr, the respective connection will assume a generic</p>
<p>/ "localhost" identity.  If you use real network loopback, this might be translated to the</p>
<p>/ actual bound loopback port.  Otherwise, the port will be zero.</p>

```csharp
public static bool CreateSocketPair(out HSteamNetConnection pOutConnection1, out HSteamNetConnection pOutConnection2, bool bUseNetworkLoopback, ref SteamNetworkingIdentity pIdentity1, ref SteamNetworkingIdentity pIdentity2)
```

#### Parameters

- **pOutConnection1**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pOutConnection2**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **bUseNetworkLoopback**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **pIdentity1**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **pIdentity2**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestroyPollGroup(HSteamNetPollGroup)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L617)

<p>/ Destroy a poll group created with CreatePollGroup().</p>
<p>/</p>
<p>/ If there are any connections in the poll group, they are removed from the group,</p>
<p>/ and left in a state where they are not part of any poll group.</p>
<p>/ Returns false if passed an invalid poll group handle.</p>

```csharp
public static bool DestroyPollGroup(HSteamNetPollGroup hPollGroup)
```

#### Parameters

- **hPollGroup**: [HSteamNetPollGroup](/docs/api/steamapi/hsteamnetpollgroup)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FindRelayAuthTicketForServer(ref SteamNetworkingIdentity, int, out SteamDatagramRelayAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L688)

<p>/ Search cache for a ticket to talk to the server on the specified virtual port.</p>
<p>/ If found, returns the number of seconds until the ticket expires, and optionally</p>
<p>/ the complete cracked ticket.  Returns 0 if we don't have a ticket.</p>
<p>/</p>
<p>/ Typically this is useful just to confirm that you have a ticket, before you</p>
<p>/ call ConnectToHostedDedicatedServer to connect to the server.</p>

```csharp
public static int FindRelayAuthTicketForServer(ref SteamNetworkingIdentity identityGameServer, int nRemoteVirtualPort, out SteamDatagramRelayAuthTicket pOutParsedTicket)
```

#### Parameters

- **identityGameServer**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)
- **nRemoteVirtualPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOutParsedTicket**: [SteamDatagramRelayAuthTicket](/docs/api/steamapi/steamdatagramrelayauthticket)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FlushMessagesOnConnection(HSteamNetConnection)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L353)

<p>/ Flush any messages waiting on the Nagle timer and send them</p>
<p>/ at the next transmission opportunity (often that means right now).</p>
<p>/</p>
<p>/ If Nagle is enabled (it's on by default) then when calling</p>
<p>/ SendMessageToConnection the message will be buffered, up to the Nagle time</p>
<p>/ before being sent, to merge small messages into the same packet.</p>
<p>/ (See k_ESteamNetworkingConfig_NagleTime)</p>
<p>/</p>
<p>/ Returns:</p>
<p>/ k_EResultInvalidParam: invalid connection handle</p>
<p>/ k_EResultInvalidState: connection is in an invalid state</p>
<p>/ k_EResultNoConnection: connection has ended</p>
<p>/ k_EResultIgnored: We weren't (yet) connected, so this operation has no effect.</p>

```csharp
public static EResult FlushMessagesOnConnection(HSteamNetConnection hConn)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### GetAuthenticationStatus(out SteamNetAuthenticationStatus_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L592)

<p>/ Query our readiness to participate in authenticated communications.  A</p>
<p>/ SteamNetAuthenticationStatus_t callback is posted any time this status changes,</p>
<p>/ but you can use this function to query it at any time.</p>
<p>/</p>
<p>/ The value of SteamNetAuthenticationStatus_t::m_eAvail is returned.  If you only</p>
<p>/ want this high level status, you can pass NULL for pDetails.  If you want further</p>
<p>/ details, pass non-NULL to receive them.</p>

```csharp
public static ESteamNetworkingAvailability GetAuthenticationStatus(out SteamNetAuthenticationStatus_t pDetails)
```

#### Parameters

- **pDetails**: [SteamNetAuthenticationStatus_t](/docs/api/steamapi/steamnetauthenticationstatus_t)

#### Returns

- [ESteamNetworkingAvailability](/docs/api/steamapi/esteamnetworkingavailability)

### GetCertificateRequest(out int, nint, out SteamNetworkingErrMsg)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L919)

<p> Certificate provision by the application.  On Steam, we normally handle all this automatically</p>
<p> and you will not need to use these advanced functions.</p>
<p>/ Get blob that describes a certificate request.  You can send this to your game coordinator.</p>
<p>/ Upon entry, *pcbBlob should contain the size of the buffer.  On successful exit, it will</p>
<p>/ return the number of bytes that were populated.  You can pass pBlob=NULL to query for the required</p>
<p>/ size.  (512 bytes is a conservative estimate.)</p>
<p>/</p>
<p>/ Pass this blob to your game coordinator and call SteamDatagram_CreateCert.</p>

```csharp
public static bool GetCertificateRequest(out int pcbBlob, nint pBlob, out SteamNetworkingErrMsg errMsg)
```

#### Parameters

- **pcbBlob**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pBlob**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **errMsg**: [SteamNetworkingErrMsg](/docs/api/steamapi/steamnetworkingerrmsg)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionInfo(HSteamNetConnection, out SteamNetConnectionInfo_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L383)

<p>/ Returns basic information about the high-level state of the connection.</p>

```csharp
public static bool GetConnectionInfo(HSteamNetConnection hConn, out SteamNetConnectionInfo_t pInfo)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pInfo**: [SteamNetConnectionInfo_t](/docs/api/steamapi/steamnetconnectioninfo_t)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionName(HSteamNetConnection, out string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L246)

<p>/ Fetch connection name.  Returns false if handle is invalid</p>

```csharp
public static bool GetConnectionName(HSteamNetConnection hPeer, out string pszName, int nMaxLen)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pszName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **nMaxLen**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetConnectionRealTimeStatus(HSteamNetConnection, ref SteamNetConnectionRealTimeStatus_t, int, ref SteamNetConnectionRealTimeLaneStatus_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L404)

<p>/ Returns a small set of information about the real-time state of the connection</p>
<p>/ and the queue status of each lane.</p>
<p>/</p>
<p>/ - pStatus may be NULL if the information is not desired.  (E.g. you are only interested</p>
<p>/   in the lane information.)</p>
<p>/ - On entry, nLanes specifies the length of the pLanes array.  This may be 0</p>
<p>/   if you do not wish to receive any lane data.  It's OK for this to be smaller than</p>
<p>/   the total number of configured lanes.</p>
<p>/ - pLanes points to an array that will receive lane-specific info.  It can be NULL</p>
<p>/   if this is not needed.</p>
<p>/</p>
<p>/ Return value:</p>
<p>/ - k_EResultNoConnection - connection handle is invalid or connection has been closed.</p>
<p>/ - k_EResultInvalidParam - nLanes is bad</p>

```csharp
public static EResult GetConnectionRealTimeStatus(HSteamNetConnection hConn, ref SteamNetConnectionRealTimeStatus_t pStatus, int nLanes, ref SteamNetConnectionRealTimeLaneStatus_t pLanes)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pStatus**: [SteamNetConnectionRealTimeStatus_t](/docs/api/steamapi/steamnetconnectionrealtimestatus_t)
- **nLanes**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pLanes**: [SteamNetConnectionRealTimeLaneStatus_t](/docs/api/steamapi/steamnetconnectionrealtimelanestatus_t)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### GetConnectionUserData(HSteamNetConnection)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L228)

<p>/ Fetch connection user data.  Returns -1 if handle is invalid</p>
<p>/ or if you haven't set any userdata on the connection.</p>

```csharp
public static long GetConnectionUserData(HSteamNetConnection hPeer)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)

#### Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetDetailedConnectionStatus(HSteamNetConnection, out string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L419)

<p>/ Returns detailed connection stats in text format.  Useful</p>
<p>/ for dumping to a log, etc.</p>
<p>/</p>
<p>/ Returns:</p>
<p>/ -1 failure (bad connection handle)</p>
<p>/ 0 OK, your buffer was filled in and '\0'-terminated</p>
<p>/ &gt;0 Your buffer was either nullptr, or it was too small and the text got truncated.</p>
<p>/    Try again with a buffer of at least N bytes.</p>

```csharp
public static int GetDetailedConnectionStatus(HSteamNetConnection hConn, out string pszBuf, int cbBuf)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pszBuf**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **cbBuf**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetFakeIP(int, out SteamNetworkingFakeIPResult_t)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1028)

<p>/ Return info about the FakeIP and port(s) that we have been assigned,</p>
<p>/ if any.  idxFirstPort is currently reserved and must be zero.</p>
<p>/ Make sure and check SteamNetworkingFakeIPResult_t::m_eResult</p>

```csharp
public static void GetFakeIP(int idxFirstPort, out SteamNetworkingFakeIPResult_t pInfo)
```

#### Parameters

- **idxFirstPort**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pInfo**: [SteamNetworkingFakeIPResult_t](/docs/api/steamapi/steamnetworkingfakeipresult_t)

### GetGameCoordinatorServerLogin(nint, out int, nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L825)

<p>/ Generate an authentication blob that can be used to securely login with</p>
<p>/ your backend, using SteamDatagram_ParseHostedServerLogin.  (See</p>
<p>/ steamdatagram_gamecoordinator.h)</p>
<p>/</p>
<p>/ Before calling the function:</p>
<p>/ - Populate the app data in pLoginInfo (m_cbAppData and m_appData).  You can leave</p>
<p>/   all other fields uninitialized.</p>
<p>/ - *pcbSignedBlob contains the size of the buffer at pBlob.  (It should be</p>
<p>/   at least k_cbMaxSteamDatagramGameCoordinatorServerLoginSerialized.)</p>
<p>/</p>
<p>/ On a successful exit:</p>
<p>/ - k_EResultOK is returned</p>
<p>/ - All of the remaining fields of pLoginInfo will be filled out.</p>
<p>/ - *pcbSignedBlob contains the size of the serialized blob that has been</p>
<p>/   placed into pBlob.</p>
<p>/</p>
<p>/ Unsuccessful exit:</p>
<p>/ - Something other than k_EResultOK is returned.</p>
<p>/ - k_EResultNotLoggedOn: you are not logged in (yet)</p>
<p>/ - See GetHostedDedicatedServerAddress for more potential failure return values.</p>
<p>/ - A non-localized diagnostic debug message will be placed in pBlob that describes</p>
<p>/   the cause of the failure.</p>
<p>/</p>
<p>/ This works by signing the contents of the SteamDatagramGameCoordinatorServerLogin</p>
<p>/ with the cert that is issued to this server.  In dev environments, it's OK if you do</p>
<p>/ not have a cert.  (You will need to enable insecure dev login in SteamDatagram_ParseHostedServerLogin.)</p>
<p>/ Otherwise, you will need a signed cert.</p>
<p>/</p>
<p>/ NOTE: The routing blob returned here is not encrypted.  Send it to your backend</p>
<p>/       and don't share it directly with clients.</p>

```csharp
public static EResult GetGameCoordinatorServerLogin(nint pLoginInfo, out int pcbSignedBlob, nint pBlob)
```

#### Parameters

- **pLoginInfo**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **pcbSignedBlob**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pBlob**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### GetHostedDedicatedServerAddress(out SteamDatagramHostedAddress)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L768)

<p>/ Return info about the hosted server.  This contains the PoPID of the server,</p>
<p>/ and opaque routing information that can be used by the relays to send traffic</p>
<p>/ to your server.</p>
<p>/</p>
<p>/ You will need to send this information to your backend, and put it in tickets,</p>
<p>/ so that the relays will know how to forward traffic from</p>
<p>/ clients to your server.  See SteamDatagramRelayAuthTicket for more info.</p>
<p>/</p>
<p>/ Also, note that the routing information is contained in SteamDatagramGameCoordinatorServerLogin,</p>
<p>/ so if possible, it's preferred to use GetGameCoordinatorServerLogin to send this info</p>
<p>/ to your game coordinator service, and also login securely at the same time.</p>
<p>/</p>
<p>/ On a successful exit, k_EResultOK is returned</p>
<p>/</p>
<p>/ Unsuccessful exit:</p>
<p>/ - Something other than k_EResultOK is returned.</p>
<p>/ - k_EResultInvalidState: We are not configured to listen for SDR (SDR_LISTEN_SOCKET</p>
<p>/   is not set.)</p>
<p>/ - k_EResultPending: we do not (yet) have the authentication information needed.</p>
<p>/   (See GetAuthenticationStatus.)  If you use environment variables to pre-fetch</p>
<p>/   the network config, this data should always be available immediately.</p>
<p>/ - A non-localized diagnostic debug message will be placed in m_data that describes</p>
<p>/   the cause of the failure.</p>
<p>/</p>
<p>/ NOTE: The returned blob is not encrypted.  Send it to your backend, but don't</p>
<p>/       directly share it with clients.</p>

```csharp
public static EResult GetHostedDedicatedServerAddress(out SteamDatagramHostedAddress pRouting)
```

#### Parameters

- **pRouting**: [SteamDatagramHostedAddress](/docs/api/steamapi/steamdatagramhostedaddress)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### GetHostedDedicatedServerPOPID()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L735)

<p>/ Returns 0 if SDR_LISTEN_PORT is not set.  Otherwise, returns the data center the server</p>
<p>/ is running in.  This will be k_SteamDatagramPOPID_dev in non-production environment.</p>

```csharp
public static SteamNetworkingPOPID GetHostedDedicatedServerPOPID()
```

#### Returns

- [SteamNetworkingPOPID](/docs/api/steamapi/steamnetworkingpopid)

### GetHostedDedicatedServerPort()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L726)

<p> Servers hosted in data centers known to the Valve relay network</p>
<p>/ Returns the value of the SDR_LISTEN_PORT environment variable.  This</p>
<p>/ is the UDP server your server will be listening on.  This will</p>
<p>/ configured automatically for you in production environments.</p>
<p>/</p>
<p>/ In development, you'll need to set it yourself.  See</p>
<p>/ https://partner.steamgames.com/doc/api/ISteamNetworkingSockets</p>
<p>/ for more information on how to configure dev environments.</p>

```csharp
public static ushort GetHostedDedicatedServerPort()
```

#### Returns

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### GetIdentity(out SteamNetworkingIdentity)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L548)

<p> Identity and authentication</p>
<p>/ Get the identity assigned to this interface.</p>
<p>/ E.g. on Steam, this is the user's SteamID, or for the gameserver interface, the SteamID assigned</p>
<p>/ to the gameserver.  Returns false and sets the result to an invalid identity if we don't know</p>
<p>/ our identity yet.  (E.g. GameServer has not logged in.  On Steam, the user will know their SteamID</p>
<p>/ even if they are not signed into Steam.)</p>

```csharp
public static bool GetIdentity(out SteamNetworkingIdentity pIdentity)
```

#### Parameters

- **pIdentity**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetListenSocketAddress(HSteamListenSocket, out SteamNetworkingIPAddr)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L434)

<p>/ Returns local IP and port that a listen socket created using CreateListenSocketIP is bound to.</p>
<p>/</p>
<p>/ An IPv6 address of ::0 means "any IPv4 or IPv6"</p>
<p>/ An IPv6 address of ::ffff:0000:0000 means "any IPv4"</p>

```csharp
public static bool GetListenSocketAddress(HSteamListenSocket hSocket, out SteamNetworkingIPAddr address)
```

#### Parameters

- **hSocket**: [HSteamListenSocket](/docs/api/steamapi/hsteamlistensocket)
- **address**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetRemoteFakeIPForConnection(HSteamNetConnection, out SteamNetworkingIPAddr)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L1066)

<p>/ If the connection was initiated using the "FakeIP" system, then we</p>
<p>/ we can get an IP address for the remote host.  If the remote host had</p>
<p>/ a global FakeIP at the time the connection was established, this</p>
<p>/ function will return that global IP.  Otherwise, a FakeIP that is</p>
<p>/ unique locally will be allocated from the local FakeIP address space,</p>
<p>/ and that will be returned.</p>
<p>/</p>
<p>/ The allocation of local FakeIPs attempts to assign addresses in</p>
<p>/ a consistent manner.  If multiple connections are made to the</p>
<p>/ same remote host, they *probably* will return the same FakeIP.</p>
<p>/ However, since the namespace is limited, this cannot be guaranteed.</p>
<p>/</p>
<p>/ On failure, returns:</p>
<p>/ - k_EResultInvalidParam: invalid connection handle</p>
<p>/ - k_EResultIPNotFound: This connection wasn't made using FakeIP system</p>

```csharp
public static EResult GetRemoteFakeIPForConnection(HSteamNetConnection hConn, out SteamNetworkingIPAddr pOutAddr)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pOutAddr**: [SteamNetworkingIPAddr](/docs/api/steamapi/steamnetworkingipaddr)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### InitAuthentication()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L578)

<p>/ Indicate our desire to be ready participate in authenticated communications.</p>
<p>/ If we are currently not ready, then steps will be taken to obtain the necessary</p>
<p>/ certificates.   (This includes a certificate for us, as well as any CA certificates</p>
<p>/ needed to authenticate peers.)</p>
<p>/</p>
<p>/ You can call this at program init time if you know that you are going to</p>
<p>/ be making authenticated connections, so that we will be ready immediately when</p>
<p>/ those connections are attempted.  (Note that essentially all connections require</p>
<p>/ authentication, with the exception of ordinary UDP connections with authentication</p>
<p>/ disabled using k_ESteamNetworkingConfig_IP_AllowWithoutAuth.)  If you don't call</p>
<p>/ this function, we will wait until a feature is utilized that that necessitates</p>
<p>/ these resources.</p>
<p>/</p>
<p>/ You can also call this function to force a retry, if failure has occurred.</p>
<p>/ Once we make an attempt and fail, we will not automatically retry.</p>
<p>/ In this respect, the behavior of the system after trying and failing is the same</p>
<p>/ as before the first attempt: attempting authenticated communication or calling</p>
<p>/ this function will call the system to attempt to acquire the necessary resources.</p>
<p>/</p>
<p>/ You can use GetAuthenticationStatus or listen for SteamNetAuthenticationStatus_t</p>
<p>/ to monitor the status.</p>
<p>/</p>
<p>/ Returns the current value that would be returned from GetAuthenticationStatus.</p>

```csharp
public static ESteamNetworkingAvailability InitAuthentication()
```

#### Returns

- [ESteamNetworkingAvailability](/docs/api/steamapi/esteamnetworkingavailability)

### ReceiveMessagesOnConnection(HSteamNetConnection, nint[], int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L375)

<p>/ Fetch the next available message(s) from the connection, if any.</p>
<p>/ Returns the number of messages returned into your array, up to nMaxMessages.</p>
<p>/ If the connection handle is invalid, -1 is returned.</p>
<p>/</p>
<p>/ The order of the messages returned in the array is relevant.</p>
<p>/ Reliable messages will be received in the order they were sent (and with the</p>
<p>/ same sizes --- see SendMessageToConnection for on this subtle difference from a stream socket).</p>
<p>/</p>
<p>/ Unreliable messages may be dropped, or delivered out of order with respect to</p>
<p>/ each other or with respect to reliable messages.  The same unreliable message</p>
<p>/ may be received multiple times.</p>
<p>/</p>
<p>/ If any messages are returned, you MUST call SteamNetworkingMessage_t::Release() on each</p>
<p>/ of them free up resources after you are done.  It is safe to keep the object alive for</p>
<p>/ a little while (put it into some queue, etc), and you may call Release() from any thread.</p>

```csharp
public static int ReceiveMessagesOnConnection(HSteamNetConnection hConn, nint[] ppOutMessages, int nMaxMessages)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **ppOutMessages**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)[]
- **nMaxMessages**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReceiveMessagesOnPollGroup(HSteamNetPollGroup, nint[], int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L660)

<p>/ Same as ReceiveMessagesOnConnection, but will return the next messages available</p>
<p>/ on any connection in the poll group.  Examine SteamNetworkingMessage_t::m_conn</p>
<p>/ to know which connection.  (SteamNetworkingMessage_t::m_nConnUserData might also</p>
<p>/ be useful.)</p>
<p>/</p>
<p>/ Delivery order of messages among different connections will usually match the</p>
<p>/ order that the last packet was received which completed the message.  But this</p>
<p>/ is not a strong guarantee, especially for packets received right as a connection</p>
<p>/ is being assigned to poll group.</p>
<p>/</p>
<p>/ Delivery order of messages on the same connection is well defined and the</p>
<p>/ same guarantees are present as mentioned in ReceiveMessagesOnConnection.</p>
<p>/ (But the messages are not grouped by connection, so they will not necessarily</p>
<p>/ appear consecutively in the list; they may be interleaved with messages for</p>
<p>/ other connections.)</p>

```csharp
public static int ReceiveMessagesOnPollGroup(HSteamNetPollGroup hPollGroup, nint[] ppOutMessages, int nMaxMessages)
```

#### Parameters

- **hPollGroup**: [HSteamNetPollGroup](/docs/api/steamapi/hsteamnetpollgroup)
- **ppOutMessages**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)[]
- **nMaxMessages**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ReceivedP2PCustomSignal(nint, int, out ISteamNetworkingSignalingRecvContext)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L904)

<p>/ Called when custom signaling has received a message.  When your</p>
<p>/ signaling channel receives a message, it should save off whatever</p>
<p>/ routing information was in the envelope into the context object,</p>
<p>/ and then pass the payload to this function.</p>
<p>/</p>
<p>/ A few different things can happen next, depending on the message:</p>
<p>/</p>
<p>/ - If the signal is associated with existing connection, it is dealt</p>
<p>/   with immediately.  If any replies need to be sent, they will be</p>
<p>/   dispatched using the ISteamNetworkingConnectionSignaling</p>
<p>/   associated with the connection.</p>
<p>/ - If the message represents a connection request (and the request</p>
<p>/   is not redundant for an existing connection), a new connection</p>
<p>/   will be created, and ReceivedConnectRequest will be called on your</p>
<p>/   context object to determine how to proceed.</p>
<p>/ - Otherwise, the message is for a connection that does not</p>
<p>/   exist (anymore).  In this case, we *may* call SendRejectionReply</p>
<p>/   on your context object.</p>
<p>/</p>
<p>/ In any case, we will not save off pContext or access it after this</p>
<p>/ function returns.</p>
<p>/</p>
<p>/ Returns true if the message was parsed and dispatched without anything</p>
<p>/ unusual or suspicious happening.  Returns false if there was some problem</p>
<p>/ with the message that prevented ordinary handling.  (Debug output will</p>
<p>/ usually have more information.)</p>
<p>/</p>
<p>/ If you expect to be using relayed connections, then you probably want</p>
<p>/ to call ISteamNetworkingUtils::InitRelayNetworkAccess() when your app initializes</p>

```csharp
public static bool ReceivedP2PCustomSignal(nint pMsg, int cbMsg, out ISteamNetworkingSignalingRecvContext pContext)
```

#### Parameters

- **pMsg**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbMsg**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pContext**: [ISteamNetworkingSignalingRecvContext](/docs/api/steamapi/isteamnetworkingsignalingrecvcontext)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReceivedRelayAuthTicket(nint, int, out SteamDatagramRelayAuthTicket)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L675)

<p> Clients connecting to dedicated servers hosted in a data center,</p>
<p> using tickets issued by your game coordinator.  If you are not</p>
<p> issuing your own tickets to restrict who can attempt to connect</p>
<p> to your server, then you won't use these functions.</p>
<p>/ Call this when you receive a ticket from your backend / matchmaking system.  Puts the</p>
<p>/ ticket into a persistent cache, and optionally returns the parsed ticket.</p>
<p>/</p>
<p>/ See stamdatagram_ticketgen.h for more details.</p>

```csharp
public static bool ReceivedRelayAuthTicket(nint pvTicket, int cbTicket, out SteamDatagramRelayAuthTicket pOutParsedTicket)
```

#### Parameters

- **pvTicket**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbTicket**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOutParsedTicket**: [SteamDatagramRelayAuthTicket](/docs/api/steamapi/steamdatagramrelayauthticket)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ResetIdentity(ref SteamNetworkingIdentity)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L943)

<p>/ Reset the identity associated with this instance.</p>
<p>/ Any open connections are closed.  Any previous certificates, etc are discarded.</p>
<p>/ You can pass a specific identity that you want to use, or you can pass NULL,</p>
<p>/ in which case the identity will be invalid until you set it using SetCertificate</p>
<p>/</p>
<p>/ NOTE: This function is not actually supported on Steam!  It is included</p>
<p>/       for use on other platforms where the active user can sign out and</p>
<p>/       a new user can sign in.</p>

```csharp
public static void ResetIdentity(ref SteamNetworkingIdentity pIdentity)
```

#### Parameters

- **pIdentity**: [SteamNetworkingIdentity](/docs/api/steamapi/steamnetworkingidentity)

### RunCallbacks()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L956)

<p> Misc</p>
<p>/ Invoke all callback functions queued for this interface.</p>
<p>/ See k_ESteamNetworkingConfig_Callback_ConnectionStatusChanged, etc</p>
<p>/</p>
<p>/ You don't need to call this if you are using Steam's callback dispatch</p>
<p>/ mechanism (SteamAPI_RunCallbacks and SteamGameserver_RunCallbacks).</p>

```csharp
public static void RunCallbacks()
```

### SendMessageToConnection(HSteamNetConnection, nint, uint, int, out long)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L294)

<p>/ Send a message to the remote host on the specified connection.</p>
<p>/</p>
<p>/ nSendFlags determines the delivery guarantees that will be provided,</p>
<p>/ when data should be buffered, etc.  E.g. k_nSteamNetworkingSend_Unreliable</p>
<p>/</p>
<p>/ Note that the semantics we use for messages are not precisely</p>
<p>/ the same as the semantics of a standard "stream" socket.</p>
<p>/ (SOCK_STREAM)  For an ordinary stream socket, the boundaries</p>
<p>/ between chunks are not considered relevant, and the sizes of</p>
<p>/ the chunks of data written will not necessarily match up to</p>
<p>/ the sizes of the chunks that are returned by the reads on</p>
<p>/ the other end.  The remote host might read a partial chunk,</p>
<p>/ or chunks might be coalesced.  For the message semantics</p>
<p>/ used here, however, the sizes WILL match.  Each send call</p>
<p>/ will match a successful read call on the remote host</p>
<p>/ one-for-one.  If you are porting existing stream-oriented</p>
<p>/ code to the semantics of reliable messages, your code should</p>
<p>/ work the same, since reliable message semantics are more</p>
<p>/ strict than stream semantics.  The only caveat is related to</p>
<p>/ performance: there is per-message overhead to retain the</p>
<p>/ message sizes, and so if your code sends many small chunks</p>
<p>/ of data, performance will suffer. Any code based on stream</p>
<p>/ sockets that does not write excessively small chunks will</p>
<p>/ work without any changes.</p>
<p>/</p>
<p>/ The pOutMessageNumber is an optional pointer to receive the</p>
<p>/ message number assigned to the message, if sending was successful.</p>
<p>/</p>
<p>/ Returns:</p>
<p>/ - k_EResultInvalidParam: invalid connection handle, or the individual message is too big.</p>
<p>/   (See k_cbMaxSteamNetworkingSocketsMessageSizeSend)</p>
<p>/ - k_EResultInvalidState: connection is in an invalid state</p>
<p>/ - k_EResultNoConnection: connection has ended</p>
<p>/ - k_EResultIgnored: You used k_nSteamNetworkingSend_NoDelay, and the message was dropped because</p>
<p>/   we were not ready to send it.</p>
<p>/ - k_EResultLimitExceeded: there was already too much data queued to be sent.</p>
<p>/   (See k_ESteamNetworkingConfig_SendBufferSize)</p>

```csharp
public static EResult SendMessageToConnection(HSteamNetConnection hConn, nint pData, uint cbData, int nSendFlags, out long pOutMessageNumber)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pData**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbData**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)
- **nSendFlags**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pOutMessageNumber**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [EResult](/docs/api/steamapi/eresult)

### SendMessages(int, SteamNetworkingMessage_t[], long[])

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L333)

<p>/ Send one or more messages without copying the message payload.</p>
<p>/ This is the most efficient way to send messages. To use this</p>
<p>/ function, you must first allocate a message object using</p>
<p>/ ISteamNetworkingUtils::AllocateMessage.  (Do not declare one</p>
<p>/ on the stack or allocate your own.)</p>
<p>/</p>
<p>/ You should fill in the message payload.  You can either let</p>
<p>/ it allocate the buffer for you and then fill in the payload,</p>
<p>/ or if you already have a buffer allocated, you can just point</p>
<p>/ m_pData at your buffer and set the callback to the appropriate function</p>
<p>/ to free it.  Note that if you use your own buffer, it MUST remain valid</p>
<p>/ until the callback is executed.  And also note that your callback can be</p>
<p>/ invoked at any time from any thread (perhaps even before SendMessages</p>
<p>/ returns!), so it MUST be fast and threadsafe.</p>
<p>/</p>
<p>/ You MUST also fill in:</p>
<p>/ - m_conn - the handle of the connection to send the message to</p>
<p>/ - m_nFlags - bitmask of k_nSteamNetworkingSend_xxx flags.</p>
<p>/</p>
<p>/ All other fields are currently reserved and should not be modified.</p>
<p>/</p>
<p>/ The library will take ownership of the message structures.  They may</p>
<p>/ be modified or become invalid at any time, so you must not read them</p>
<p>/ after passing them to this function.</p>
<p>/</p>
<p>/ pOutMessageNumberOrResult is an optional array that will receive,</p>
<p>/ for each message, the message number that was assigned to the message</p>
<p>/ if sending was successful.  If sending failed, then a negative EResult</p>
<p>/ value is placed into the array.  For example, the array will hold</p>
<p>/ -k_EResultInvalidState if the connection was in an invalid state.</p>
<p>/ See ISteamNetworkingSockets::SendMessageToConnection for possible</p>
<p>/ failure codes.</p>

```csharp
public static void SendMessages(int nMessages, SteamNetworkingMessage_t[] pMessages, long[] pOutMessageNumberOrResult)
```

#### Parameters

- **nMessages**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **pMessages**: [SteamNetworkingMessage_t](/docs/api/steamapi/steamnetworkingmessage_t)[]
- **pOutMessageNumberOrResult**: [long](https://learn.microsoft.com/dotnet/api/system.int64)[]

### SetCertificate(nint, int, out SteamNetworkingErrMsg)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L928)

<p>/ Set the certificate.  The certificate blob should be the output of</p>
<p>/ SteamDatagram_CreateCert.</p>

```csharp
public static bool SetCertificate(nint pCertificate, int cbCertificate, out SteamNetworkingErrMsg errMsg)
```

#### Parameters

- **pCertificate**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **cbCertificate**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **errMsg**: [SteamNetworkingErrMsg](/docs/api/steamapi/steamnetworkingerrmsg)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetConnectionName(HSteamNetConnection, string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L236)

<p>/ Set a name for the connection, used mostly for debugging</p>

```csharp
public static void SetConnectionName(HSteamNetConnection hPeer, string pszName)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **pszName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetConnectionPollGroup(HSteamNetConnection, HSteamNetPollGroup)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L638)

<p>/ Assign a connection to a poll group.  Note that a connection may only belong to a</p>
<p>/ single poll group.  Adding a connection to a poll group implicitly removes it from</p>
<p>/ any other poll group it is in.</p>
<p>/</p>
<p>/ You can pass k_HSteamNetPollGroup_Invalid to remove a connection from its current</p>
<p>/ poll group without adding it to a new poll group.</p>
<p>/</p>
<p>/ If there are received messages currently pending on the connection, an attempt</p>
<p>/ is made to add them to the queue of messages for the poll group in approximately</p>
<p>/ the order that would have applied if the connection was already part of the poll</p>
<p>/ group at the time that the messages were received.</p>
<p>/</p>
<p>/ Returns false if the connection handle is invalid, or if the poll group handle</p>
<p>/ is invalid (and not k_HSteamNetPollGroup_Invalid).</p>

```csharp
public static bool SetConnectionPollGroup(HSteamNetConnection hConn, HSteamNetPollGroup hPollGroup)
```

#### Parameters

- **hConn**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **hPollGroup**: [HSteamNetPollGroup](/docs/api/steamapi/hsteamnetpollgroup)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetConnectionUserData(HSteamNetConnection, long)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/SteamAPI/isteamgameservernetworkingsockets.cs#L219)

<p>/ Set connection user data.  the data is returned in the following places</p>
<p>/ - You can query it using GetConnectionUserData.</p>
<p>/ - The SteamNetworkingmessage_t structure.</p>
<p>/ - The SteamNetConnectionInfo_t structure.</p>
<p>/   (Which is a member of SteamNetConnectionStatusChangedCallback_t -- but see WARNINGS below!!!!)</p>
<p>/</p>
<p>/ Do you need to set this atomically when the connection is created?</p>
<p>/ See k_ESteamNetworkingConfig_ConnectionUserData.</p>
<p>/</p>
<p>/ WARNING: Be *very careful* when using the value provided in callbacks structs.</p>
<p>/ Callbacks are queued, and the value that you will receive in your</p>
<p>/ callback is the userdata that was effective at the time the callback</p>
<p>/ was queued.  There are subtle race conditions that can happen if you</p>
<p>/ don't understand this!</p>
<p>/</p>
<p>/ If any incoming messages for this connection are queued, the userdata</p>
<p>/ field is updated, so that when when you receive messages (e.g. with</p>
<p>/ ReceiveMessagesOnConnection), they will always have the very latest</p>
<p>/ userdata.  So the tricky race conditions that can happen with callbacks</p>
<p>/ do not apply to retrieving messages.</p>
<p>/</p>
<p>/ Returns false if the handle is invalid.</p>

```csharp
public static bool SetConnectionUserData(HSteamNetConnection hPeer, long nUserData)
```

#### Parameters

- **hPeer**: [HSteamNetConnection](/docs/api/steamapi/hsteamnetconnection)
- **nUserData**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

